import { StyleSheet, View } from "react-native";
import {Stack} from "expo-router";

const AiLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '' }}/>
      <Stack.Screen name="modeSelect" options={{ title: '' }}/>

      <Stack.Screen name="assessmentProfileForm" options={{title: ''}}/>
      <Stack.Screen name="assessmentInfoForm" options={{title: '',}}/>
      <Stack.Screen name="assessmentGoalsForm" options={{title: '',}}/>
      <Stack.Screen name="assessmentResults" />

      <Stack.Screen name="symptomSelect" />
      <Stack.Screen name="symptomCheckerForm" />
      <Stack.Screen name="symptomResults" />

      <Stack.Screen name="bmiForm" options={{title: ''}} />
      <Stack.Screen name="bmiResults" options={{title: ''}}/>
    </Stack>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AiLayout;