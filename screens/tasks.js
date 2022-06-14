import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Tasks({ route, navigation }) {
  const { title, streak, details } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(title)}</Text>
      <Text>{JSON.stringify(streak)}</Text>
      <Text>{JSON.stringify(details)}</Text>

      {/* <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("streak")}</Text>
      <Text>{navigation.getParam("details")}</Text> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     borderBottomWidth: 1.5,
//     borderTopWidth: 1.5,
//     borderColor: "rgba(99, 102, 241, 0.75);",
//   },
//   text: {
//     color: "#fff",
//     fontSize: 20,
//     paddingLeft: 10,
//     paddingVertical: 20,
//   },
// });
