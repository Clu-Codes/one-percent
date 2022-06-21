import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";

export default function TaskScreen({ route, navigation }) {
  const { title, streak, details } = route.params;
  const [description, onChangeDescription] = useState(details);
  const [streakCount, setStreakCount] = useState(streak);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text
        onPress={() => {
          setStreakCount(streakCount + 1);
        }}
        style={[styles.streak]}
      >
        {streakCount}
      </Text>
      <TextInput
        onChangeText={onChangeDescription}
        value={description}
        multiline={true}
        style={[styles.description, styles.shadowProps]}
      >
        {/* {description} */}
      </TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FF",
    alignItems: "center",
  },
  titleText: {
    color: "#000",
    fontSize: 30,
    fontFamily: "AppleSDGothicNeo-SemiBold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontWeight: "bold",
    marginBottom: 20,
    paddingTop: 20,
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
