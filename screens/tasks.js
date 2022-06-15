import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskScreen({ route, navigation }) {
  const { title, streak, details } = route.params;
  return (
    <View>
      <Text>Hello world.</Text>
      <Text>{JSON.stringify(title)}</Text>
      <Text>{JSON.stringify(streak)}</Text>
      <Text>{JSON.stringify(details)}</Text>
    </View>
  );
}
