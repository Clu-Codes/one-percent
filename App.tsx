import React, { useState } from "react";
// import { AppLoading } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './screens/home.js';
import TaskScreen from "./screens/tasks.js";
import TaskCreationScreen from "./screens/createNewTask.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={TaskScreen} />
        <Stack.Screen name="CreateTask" component={TaskCreationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}