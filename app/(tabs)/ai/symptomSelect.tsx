import {Pressable, StyleSheet, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {addAllergies, addSymptoms, removeAllergies, removeSymptoms} from "@/features/globalSlice";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SelectorModal from "@/components/SelectorModal";
import {useState} from "react";
import {Link, router} from "expo-router";
import Button from "@/components/Button";

const SymptomSelect = () => {

  const dispatch = useAppDispatch()
  const symptoms = useAppSelector(state => state.global.profile.symptoms)
  const [showSymptomsSelect, setShowSymptomsSelect] = useState(false)

  return (
    <View style={styles.container}>
      <Text>Symptom Select</Text>
      <View>
        <Pressable onPress={() => setShowSymptomsSelect(true)}>
          <MaterialIcons name="add-circle" size={24} color="black" />
        </Pressable>

        {symptoms.map(item =>
          <View key={item} style={styles.listItem}>
            <Text>{item}</Text>
            <Pressable onPress={() => dispatch(removeSymptoms(item))}>
              <MaterialCommunityIcons name="delete-circle-outline" size={24} color="black" />
            </Pressable>
          </View>

        )}
        <SelectorModal
          visible={showSymptomsSelect}
          close={() => setShowSymptomsSelect(false)}
          category="conditions"
          onSelect={(item) => {
            dispatch(addSymptoms(item))
            setShowSymptomsSelect(false)
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => router.navigate("/ai/symptomCheckerForm")}>Continue</Button>
      </View>

    </View>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#0000001A",
  },
  buttonContainer: {
    width: 100,
  },
});

export default SymptomSelect;