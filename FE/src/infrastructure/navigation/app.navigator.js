import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import SettingScreen from "../../features/setting/screens/setting.screens";
import { HikingNavigator } from "./hiking.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Hiking: "ios-location-sharp",
  Setting: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "green",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Hiking"
        component={HikingNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Setting"
        options={{ headerShown: false }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
