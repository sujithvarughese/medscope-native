import { Stack } from "expo-router";
import {Provider} from "react-redux";
import { store } from "@/utilities/store"

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </Provider>

  )
}

export default RootLayout;