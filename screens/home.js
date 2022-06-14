import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { StatusBar } from "expo-status-bar";
// import AppLoading from 'expo-app-loading';
// import tw from "tailwind-react-native-classnames";
// import {
//   useFonts,
//   LuckiestGuy_400Regular,
// } from "@expo-google-fonts/luckiest-guy";

export default function Home({ navigation }) {
  const [tasks, setTasks] = useState([
    {
      title: "Study Math",
      streak: 4,
      details: "Study math for the upcoming exam",
      key: "1",
    },
    {
      title: "Study Anestetics with Shay",
      streak: 3,
      details: "Review drug tables for the next exam",
      key: "2",
    },
    {
      title: "Practice Coding",
      streak: 2,
      details: "Try to continuously learn new technologies every week",
      key: "3",
    },
    {
      title: "Morning Yoga",
      streak: 1,
      details: "Yoga every morning with Shay before work",
      key: "4",
    },
  ]);

  return (
    <View style={[styles.background, { flex: 1 }]}>
      <View>
        <Text style={styles.headerText}>Your Tasks:</Text>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.container, styles.shadowProps]}
            onPress={() => {
              console.log(item), navigation.navigate("Tasks", item);
            }}
          >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
          //   <LinearGradient
          //     colors={["rgba(99, 102, 241, 0.75)", "transparent"]}
          //     style={[styles.container, styles.shadowProps]}
          //     start={[0.2, 0]}
          //     end={[1.3, 0]}
          //   >
          //   </LinearGradient>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    // backgroundColor: "#0c1e3e",
    backgroundColor: "#FFF",
  },
  headerText: {
    color: "black",
    fontSize: 30,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    paddingLeft: 10,
    paddingVertical: 20,
    alignContent: "center",
  },
  text: {
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontSize: 20,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    paddingLeft: 10,
    paddingVertical: 20,
  },
  container: {
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#FFF",
    width: "65%",
    height: 76,
    // borderBottomWidth: 1.5,
    // borderTopWidth: 1.5,
    // borderColor: "rgba(99, 102, 241, 0.75);",
  },
  shadowProps: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
