import {StyleSheet, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";

const AssessmentResults = () => {

  const dispatch = useAppDispatch()

  const overview: string = useAppSelector(state => state.global.results.healthAssessment.overview)
  const keyAreas: string[] = useAppSelector(state => state.global.results.healthAssessment.keyAreas)
  const riskFactors: string[] = useAppSelector(state => state.global.results.healthAssessment.riskFactors)
  const diet: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.diet)
  const exercise: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.exercise)
  const sleep: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.sleep)
  const stressManagement: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.stressManagement)
  const screenings: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.screenings)
  const vaccinations: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.vaccinations)
  const regularCheckups: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.regularCheckups)
  const healthyLivingTips: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.healthyLivingTips)
  const communityResources: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.communityResources)
  const shortTermGoals: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.shortTermGoals)
  const longTermGoals: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.longTermGoals)
  const monitoringMetrics: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.monitoringMetrics)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Assessment Results</Text>
      <View style={styles.section}>
        <Text style={styles.heading}>Overview</Text>
        <Text>{overview}</Text>
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
  section: {

  },
  title: {

  },
  heading: {

  },
  subheading: {

  },
  list: {

  }
});

export default AssessmentResults;