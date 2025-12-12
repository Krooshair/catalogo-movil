import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#4DC902"
    }}>
      <Tabs.Screen name="index" options={{
        title: "Catálogo"
        
      }} />
      <Tabs.Screen name="about" options={{
        title: "Sobre nosotros"
      }} />
    </Tabs>
  )
}