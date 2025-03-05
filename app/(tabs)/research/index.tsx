import {ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import {useState} from "react";
import {fetchConditionInfo, fetchDrugInfo} from "@/features/globalSlice";
import SelectorModal from "@/components/SelectorModal";
import {router} from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

const Research = () => {

  const dispatch = useAppDispatch()
  const [showSelectorModal, setShowSelectorModal] = useState(false)

  const loading = useAppSelector(state => state.global.loading)
  const handleSelect = async (item: string, category: string) => {
    if (category === "conditions") {
      await dispatch(fetchConditionInfo(item))
      router.navigate("/research/conditionResults")
    } else {
      await dispatch(fetchDrugInfo(item))
      router.navigate("/research/drugResults")
    }
    setShowSelectorModal(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>Search any drug or medical condition. Just start typing!</Text>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search conditions..."
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            onPress={() => setShowSelectorModal(true)}
          />
          <Ionicons name="search-sharp" size={24} color="black" />
        </View>
      </View>

      <SelectorModal visible={showSelectorModal} close={() => setShowSelectorModal(false)} category="combined" onSelect={handleSelect} />
    </SafeAreaView>


 );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  searchContainer: {
    borderColor: "#ccc",
    backgroundColor: "dodgerblue",
    padding: 16,
    gap: 16,
    alignItems: "center",
    borderRadius: 12,

  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
  },
  searchIcon: {
    position: "absolute",
    paddingHorizontal: 6,
    alignSelf: "flex-start",
  },
});

export default Research;