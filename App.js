import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// import { View, Text, StyleSheet, Image } from "react-native";

import HomeScreen from "./screens/home.js";
import TaskScreen from "./screens/tasks.js";
import TaskCreationScreen from "./screens/createNewTask.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Home: 'home',
              Tasks: 'list',
              Create: 'add',
            };

            return (
            <Ionicons name={icons[route.name]} size={size} color={color} />
            );
        },
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TaskScreen} />
        <Tab.Screen name="CreateTask" component={TaskCreationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// options={{
//   tabBarIcon: ({ focused }: any) => (
//     <View>
//       {/* <Image
//         resizeMode="contain"
//         width={30}
//         height={30}
//         style={{ tintColor: focused ? "#00bcd4" : "#fff" }}
//       /> */}
//       <HomeIcon
//         resizeMode="contain"
//         width={30} height={30}
//         style={{
//           tintColor: focused ? '#191970' : '#4666FF',
//           top: focused ? 15 : 10,
//       }}
//       />
//     </View>
//   )
// }}
