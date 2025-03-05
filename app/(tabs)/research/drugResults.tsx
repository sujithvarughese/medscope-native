import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useAppSelector} from "@/utilities/hooks";
import {useEffect} from "react";

const DrugResults = () => {

  const drugInfo = useAppSelector(state => state.global.results.drugInfo)

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{drugInfo?.name.charAt(0).toUpperCase() + drugInfo?.name.substring(1)}</Text>
        </View>

        <View>
          <Text style={styles.heading}>Description</Text>
          <Text>{drugInfo?.description}</Text>
        </View>

        <View>
          <Text style={styles.heading}>Precautions</Text>
          <Text>{drugInfo?.precautions}</Text>
        </View>

        <View>
          <Text style={styles.heading}>Uses</Text>
          {drugInfo?.uses?.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </View>
        <View>
          <Text style={styles.heading}>Side Effects</Text>
          {drugInfo?.sideEffects?.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </View>
      </View>
    </ScrollView>

 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: '#fff',
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  precautions: {

  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  usesContainer: {

  }
});

export default DrugResults;