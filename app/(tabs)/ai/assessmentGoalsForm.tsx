import {ActivityIndicator, StyleSheet, Switch, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@/utilities/hooks";
import {
  fetchHealthRecommendations,
  setHeartDisease,
  toggleImproveBloodPressure, toggleIncreaseFitness, togglePreventDiabetes,
  toggleStressReduction,
  toggleWeightManagement
} from "@/features/globalSlice";
import {router} from "expo-router";
import Button from "@/components/Button";

const AssessmentGoalsForm = () => {

  const dispatch = useAppDispatch()

  const loading = useAppSelector(state => state.global.loading)
  const weightManagement = useAppSelector(state => state.global.profile.goals.weightManagement)
  const stressReduction = useAppSelector(state => state.global.profile.goals.stressReduction)
  const improveBloodPressure = useAppSelector(state => state.global.profile.goals.improveBloodPressure)
  const preventDiabetes = useAppSelector(state => state.global.profile.goals.preventDiabetes)
  const increaseFitness = useAppSelector(state => state.global.profile.goals.increaseFitness)

  const handleSubmit = async () => {
    await dispatch(fetchHealthRecommendations())
    router.navigate("/ai/assessmentResults")
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Weight Management</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={weightManagement ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value: boolean) => {dispatch(toggleWeightManagement(value))}}
          value={weightManagement}
        />
      </View>
      <View>
        <Text>Stress Reduction</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={stressReduction ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value: boolean) => {dispatch(toggleStressReduction(value))}}
          value={stressReduction}
        />
      </View>
      <View>
        <Text>Improve Blood Pressure</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={improveBloodPressure ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value: boolean) => {dispatch(toggleImproveBloodPressure(value))}}
          value={improveBloodPressure}
        />
      </View>
      <View>
        <Text>Prevent Diabetes</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={preventDiabetes ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value: boolean) => {dispatch(togglePreventDiabetes(value))}}
          value={preventDiabetes}
        />
      </View>
      <View>
        <Text>Increase Fitness</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={increaseFitness ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value: boolean) => {dispatch(toggleIncreaseFitness(value))}}
          value={increaseFitness}
        />
      </View>

      <View style={styles.buttonContainer}>
        {loading ? <ActivityIndicator /> : <Button onPress={handleSubmit}>Get Results</Button>}
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
  buttonContainer: {

  }
});

export default AssessmentGoalsForm;