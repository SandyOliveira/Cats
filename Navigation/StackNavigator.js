import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";

import FoodScreen from "../screens/FoodScreen";
import TipsScreen from "../screens/TipsScreen";
import ToysScreen from "../screens/ToysScreen";
import CreatePost from "../screens/CreatePost"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Guia"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Guia" component={BottomTabNavigator} />
      <Stack.Screen name="FoodScreen" component={FoodScreen} />
      <Stack.Screen name="Tips" component={TipsScreen} />
      <Stack.Screen name="Toys" component={ToysScreen} />
      <Stack.Screen name="Create" component={CreatePost} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
