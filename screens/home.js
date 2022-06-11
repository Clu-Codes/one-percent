import { StatusBar } from "expo-status-bar";
// import AppLoading from 'expo-app-loading';
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import {
  useFonts,
  LuckiestGuy_400Regular,
} from "@expo-google-fonts/luckiest-guy";

export default function Home() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Hi! I am having trouble!</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        tw.style("justify-center items-center flex-1"),
        styles.background,
      ]}
    >
      <Text
        style={[
          { fontFamily: "LuckiestGuy_400Regular", fontSize: 90 },
          styles.text,
          styles.textShadow,
        ]}
      >
        1%
      </Text>
      <Text style={[tw.style("text-2xl"), styles.text, styles.textShadow]}>
        Small steps, big results
      </Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => {}}
        style={[
          tw.style("rounded-lg justify-center items-center"),
          styles.button,
        ]}
        accessibilityLabel="Learn more about this purple button"
      >
        <Text
          style={[
            tw.style("text-2xl font-bold"),
            styles.text,
            styles.textShadow,
          ]}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#008DD5",
  },
  text: {
    color: "#FFF1D0",
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  button: {
    width: 175,
    height: 60,
    top: 175,
    backgroundColor: "#739E82",
    borderBottomWidth: 3,
    borderBottomColor: "#2C5530",
  },
});
