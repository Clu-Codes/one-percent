import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
} from "react-native";

export default function TaskCreationScreen({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [streak, setStreak] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        value={title}
        style={[styles.titleInput, styles.shadowProps, styles.entryBox]}
        placeholder="Task Title"
      />
      <TextInput
        onChangeText={(text) => setDetails(text)}
        value={details}
        multiline={true}
        style={[styles.description, styles.shadowProps]}
        placeholder="Task Details"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    alignItems: "center",
  },
  focused: {
    borderWidth: 2,
    borderColor: "blue",
    borderStyle: "solid",
  },
  titleInput: {
    color: "#000",
    fontSize: 30,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    fontWeight: "bold",
    marginBottom: 20,
    paddingTop: 20,
  },
  entryBox: {
    width: "80%",
    height: 65,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  streak: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFDF00",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: "black",
    paddingHorizontal: 8,
    paddingVertical: 5,
    minHeight: 300,
    minWidth: 400,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 5,
    backgroundColor: "#fff",
    // justifyContent: "center",
  },
  shadowProps: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
