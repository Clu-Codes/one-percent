import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

export default function HomeScreen({ navigation }) {
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
    <View style={[styles.background]}>
      <View>
        <Text style={styles.headerText}>Your Tasks:</Text>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.container, styles.shadowProps]}
            onPress={() => {
              navigation.navigate("Tasks", item);
            }}
          >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View
        style={[
          {
            width: "100%",
            alignItems: "flex-end",
            right: 45,
          },
          // styles.shadowProps,
        ]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    // backgroundColor: "#0c1e3e",
    backgroundColor: "#F8F8FF",
    flex: 1,
  },
  headerText: {
    color: "#000",
    fontSize: 30,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    paddingLeft: 10,
    paddingVertical: 20,
    alignContent: "center",
  },
  text: {
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 25,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    paddingLeft: 10,
    paddingVertical: 20,
  },
  container: {
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#FFF",
    width: "85%",
    height: 76,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  shadowProps: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
