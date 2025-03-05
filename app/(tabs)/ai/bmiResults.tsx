import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useAppSelector} from "@/utilities/hooks";

const BmiResults = () => {

  const bmi = useAppSelector(state => state.global.results.bmi.bmi)
  const status = useAppSelector(state => state.global.results.bmi.status)
  const risk = useAppSelector(state => state.global.results.bmi.risk)
  const prime = useAppSelector(state => state.global.results.bmi.prime)
  const ponderalIndex = useAppSelector(state => state.global.results.bmi.ponderalIndex)
  const bmr = useAppSelector(state => state.global.results.bmi.bmr)
  const waistHipRatio = useAppSelector(state => state.global.results.bmi.waistHipRatio)
  const waistHipStatus = useAppSelector(state => state.global.results.bmi.waistHipStatus)
  const waistHeightRatio = useAppSelector(state => state.global.results.bmi.waistHeightRatio)
  const waistHeightStatus = useAppSelector(state => state.global.results.bmi.waistHeightStatus)

  return (

    <View style={styles.container}>
      <Text style={styles.title}>BMI Results</Text>

      <View style={styles.bmiContainer}>
        <Text>Your body mass index (BMI) is</Text>
        <Text style={styles.bmi}>{bmi}</Text>
      </View>

      <View>
        <Text style={styles.status}>Status: {status}</Text>
      </View>

      <View style={styles.risksContainer}>
        <Text style={styles.risksHeading}>Risk Factors</Text>
        <Text>{risk}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text>BMI Prime</Text>
        <Text style={styles.result}>{prime}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text>Ponderal Index</Text>
        <Text style={styles.result}>{ponderalIndex}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text>Basal Metabolic Rate (BMR)</Text>
        <Text style={styles.result}>{bmr}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text>Waist-to-Hip Ratio</Text>
        <Text style={styles.result}>{waistHipRatio}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text>Waist-to-Hip Status</Text>
        <Text style={styles.result}>{waistHipStatus}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text>Waist-to-Height Ratio</Text>
        <Text style={styles.result}>{waistHeightRatio}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text>Waist-to-Height Status</Text>
        <Text style={styles.result}>{waistHeightStatus}</Text>
      </View>

    </View>


 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    backgroundColor: '#fff',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bmiContainer: {
    alignItems: 'center',
  },
  bmi: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  status: {
    textAlign: 'center',
  },
  risksHeading: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
  },
  risksContainer: {
    gap: 4,
    padding: 16,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {

  },
  result: {
    fontWeight: 'bold',
  }
});

export default BmiResults;