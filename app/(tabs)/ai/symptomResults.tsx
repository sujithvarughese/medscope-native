import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useAppSelector} from "@/utilities/hooks";

type PossibleConditions = {
  condition: string,
  description: string,
  commonSymptoms: string[],
  riskLevel: string,
  additionalInfo: string,
}

const SymptomResults = () => {

  const possibleConditions: PossibleConditions[] = useAppSelector(state => state.global.results.symptomAssessment.possibleConditions)
  const recommendedActions: string[] = useAppSelector(state => state.global.results.symptomAssessment.recommendedActions)
  const lifestyleConsiderations: string[] = useAppSelector(state => state.global.results.symptomAssessment.lifestyleConsiderations)
  const whenToSeekMedicalAttention: string[] = useAppSelector(state => state.global.results.symptomAssessment.whenToSeekMedicalAttention)
  const preventiveMeasures: string[] = useAppSelector(state => state.global.results.symptomAssessment.preventiveMeasures)

  return (
    <ScrollView style={styles.container}>

      <View style={styles.conditionContainer}>
        {possibleConditions?.map((item: PossibleConditions, index) =>
          <View key={index} style={styles.condition}>
            <Text style={styles.title}>{item.condition}</Text>
            <View>
              <Text style={styles.heading}>Description</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>


            <View style={styles.symptomList}>
              <Text style={styles.heading}>Symptoms</Text>
              {item.commonSymptoms?.map((symptom: string, index) => <Text key={index} style={styles.text}>{symptom}</Text>)}
            </View>

            <View>
              <Text style={styles.heading}>Risk Level</Text>
              <Text style={styles.text}>{item.riskLevel}</Text>
            </View>

            <View>
              <Text style={styles.heading}>Additional Information</Text>
              <Text style={styles.text}>{item.additionalInfo}</Text>
            </View>
          </View>
        )}
      </View>

      <View>
        <Text style={styles.heading}>Recommended Actions</Text>
        {recommendedActions?.map((item: string, index) => <Text key={index}>{item}</Text>)}
      </View>

      <View>
        <Text style={styles.heading}>Lifestyle Considerations</Text>
        {lifestyleConsiderations?.map((item: string, index) => <Text key={index}>{item}</Text>)}
      </View>

      <View>
        <Text style={styles.heading}>When to seek medical attention</Text>
        {whenToSeekMedicalAttention?.map((item: string, index) => <Text key={index}>{item}</Text>)}
      </View>

      <View>
        <Text style={styles.heading}>Preventive Measures</Text>
        {preventiveMeasures?.map((item: string, index) => <Text key={index}>{item}</Text>)}
      </View>

    </ScrollView>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  conditionContainer: {
    gap: 8
  },
  condition: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  heading: {
    fontWeight: 'bold',
  },
  symptomList: {

  },
  text: {

  }
});

export default SymptomResults;