import { StyleSheet, View } from "react-native";
import {Tabs} from "expo-router";
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {COLORS} from "@/constants/theme";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.green,
        tabBarStyle: {
          backgroundColor: "black",
          height: 40
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused}) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          )
      }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: 'AI Assessment',
          tabBarIcon: ({ color, focused}) => (
            <Fontisto name="doctor" size={24} color={color} />
          )
      }}
      />
      <Tabs.Screen
        name="research"
        options={{
          title: 'Research',
          tabBarIcon: ({ color, focused}) => (
            <FontAwesome6 name="book-medical" size={24} color={color} />
          )
        }}
      />
    </Tabs>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabLayout;