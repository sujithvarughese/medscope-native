import { Stack } from "expo-router";
import {Provider} from "react-redux";
import { store } from "@/utilities/store"
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView} from "react-native";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <Provider store={store}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            <Stack.Screen name="+not-found" />
          </Stack>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>


  )
}

export default RootLayout;