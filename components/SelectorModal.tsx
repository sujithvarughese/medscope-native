import {FlatList, Modal, Pressable, SectionList, StyleSheet, Text, TextInput, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import {useEffect, useState} from "react";
import axios from "axios";
import {FontAwesome5} from "@expo/vector-icons";
import {setShowSelectorModal} from "@/features/globalSlice";

type SelectorModalProps = {
  visible: boolean,
  close: () => void,
  category: "conditions" | "drugs" | "combined",
  onSelect: (item: string, category: string) => void,
}

const SelectorModal = ({ visible, close, category, onSelect } : SelectorModalProps ) => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const [placeholderText, setPlaceholderText] = useState<string>(category === "conditions" ? "e.g. diabetes, headache" : "Search drugs...");

  useEffect(() => {
    if (category === "conditions") {
      setPlaceholderText("e.g. diabetes, headache, etc.")
    } else if (category === "drugs") {
      setPlaceholderText("e.g. ibuprofen, aspirin, paracetamol, etc.")
    } else {
      setPlaceholderText("e.g. headache, ibuprofen, etc.")
    }
  }, [category]);

  const fetchAutoCompleteConditions = async () => {
    try {
      const responseConditions = await axios(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${query}&maxList=20`)
      const conditionResults = responseConditions.data
      setResults(conditionResults[3].map((item: [string]) => item[0]))
    } catch (error) {
      console.log(error)
    }
  }

  const fetchAutoCompleteDrugs = async () => {
    try {
      const responseDrugs = await axios(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${query}&maxList=10`)
      const drugResults = responseDrugs.data
      setResults(drugResults[1])
    } catch (error) {
      console.log(error)
    }
  }

  const fetchAutoCompleteCombined = async () => {
    try {
      const responseConditions = await axios(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${query}&maxList=10`)
      const conditionResults = responseConditions.data
      const responseDrugs = await axios(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${query}&maxList=20`)
      const drugResults = responseDrugs.data
      setResults([{ title: "Conditions", data: conditionResults[3].map((item: [string]) => item[0]) }, { title: "Drugs", data: drugResults[1] }])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (category === "combined") {
      fetchAutoCompleteCombined()
    } else if (category === "conditions") {
      fetchAutoCompleteConditions()
    } else if (category === "drugs") {
      fetchAutoCompleteDrugs()
    }
  }, [query, category]);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <FontAwesome5 name="search" size={16} color="red" />
            <TextInput
              placeholder={placeholderText}
              placeholderTextColor="gray"
              autoCapitalize="none"
              autoCorrect={false}
              value={query}
              onChangeText={(text) => setQuery(text)}
            />
          </View>
          <Pressable onPress={close}><Text>Cancel</Text></Pressable>
        </View>

        {category === "combined" ?
          <View style={styles.resultsContainer}>
            <SectionList
              sections={results}
              renderItem={({ item, section }) =>
              <Pressable onPress={() => onSelect(item, section.title.toLowerCase())} style={styles.listItem}>
                <Text style={styles.listText}>{item}</Text>
              </Pressable>}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.listHeader}>{title}</Text>
              )}
              stickySectionHeadersEnabled={false}
            />
          </View>
          :
          <View style={styles.resultsContainer}>
            <FlatList data={results} renderItem={({ item }) =>
              <Pressable onPress={() => onSelect(item, category)} style={styles.listItem}>
                <Text style={styles.listText}>{item}</Text>
              </Pressable>
            }
            />
          </View>
        }
      </View>
    </Modal>
 );
};

const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '100%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    gap: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
  },
  resultsContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  listItem: {
    paddingVertical: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,

  },
  listHeader: {
    fontSize: 20,
    fontWeight: 700,
  },
  listText: {
    fontSize: 16,
  },
});

export default SelectorModal;