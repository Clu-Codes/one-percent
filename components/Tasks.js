import { View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Tasks(props) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Sample text.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    borderColor: "rgba(99, 102, 241, 0.75);",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    paddingLeft: 10,
    paddingVertical: 20,
  },
});
