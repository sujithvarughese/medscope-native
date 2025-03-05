import { StyleSheet, View } from "react-native";
import {Stack} from "expo-router";

const ResearchLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Research', headerShown: false }} />
      <Stack.Screen name="conditionResults"  options={{ title: '' }}/>
      <Stack.Screen name="drugResults"  options={{ title: '' }}/>
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

export default ResearchLayout;