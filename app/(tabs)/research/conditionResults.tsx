import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import {useAppSelector} from "@/utilities/hooks";

const ConditionResults = () => {

  const conditionInfo = useAppSelector(state => state.global.results.conditionInfo)

  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{conditionInfo?.name}</Text>
        </View>

        <View>
          <Text style={styles.heading}>Overview</Text>
          <Text>{conditionInfo?.overview}</Text>
        </View>

        <View>
          <Text style={styles.heading}>Common Misconceptions</Text>
          {conditionInfo?.commonMisconceptions.map((item, index) =>
            <View style={styles.listItem}>
              <Text key={index}>{'\u30FB'}</Text>
              <Text key={index}>{item}</Text>)
            </View>
          )}
        </View>

        <View>
          <Text style={styles.heading}>Latest Research</Text>
          {conditionInfo?.latestResearch.map((item, index) =>
            <View style={styles.listItem}>
              <Text key={index}>{'\u30FB'}</Text>
              <Text key={index}>{item}</Text>)
            </View>
          )}
        </View>

        <View>
          <Text style={styles.heading}>Lifestyle Considerations</Text>
          {conditionInfo?.lifestyleConsiderations.map((item, index) =>
            <View style={styles.listItem}>
              <Text key={index}>{'\u30FB'}</Text>
              <Text key={index}>{item}</Text>)
            </View>
          )}
        </View>

      </View>
    </ScrollView>

 );
};

const styles = StyleSheet.create({
  page:{
    backgroundColor: '#fff',
  },
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
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    padding: 4,
  }
});

export default ConditionResults;