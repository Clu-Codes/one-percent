import { StatusBar } from "expo-status-bar";
// import AppLoading from 'expo-app-loading';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import {
  useFonts,
  LuckiestGuy_400Regular,
} from "@expo-google-fonts/luckiest-guy";

import Tasks from "../components/Tasks";

export default function Home() {
  const [task, setTask] = useState([
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
    <ScrollView style={[styles.background, { flex: 1 }]}>
      <FlatList>
        data={task}
        renderItem=
        {({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Tasks", item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      </FlatList>
      {/* <View>
        <Text style={[styles.text, { marginVertical: 20, marginLeft: 15 }]}>
          Your Tasks:
        </Text>
      </View>
      <View style={tw.style("flex flex-col")}>
        <Tasks />
      </View> */}
    </ScrollView>

    // let [fontsLoaded] = useFonts({
    //     LuckiestGuy_400Regular,
    //   });

    //   if (!fontsLoaded) {
    //     return (
    //       <View>
    //         <Text>Hi! I am having trouble!</Text>
    //       </View>
    //     );
    //   }

    // <View
    //   style={[
    //     tw.style("justify-center items-center flex-1"),
    //     styles.background,
    //   ]}
    // >
    //   <Text
    //     style={[
    //       { fontFamily: "LuckiestGuy_400Regular", fontSize: 90 },
    //       styles.text,
    //       styles.textShadow,
    //     ]}
    //   >
    //     1%
    //   </Text>
    //   <Text style={[tw.style("text-2xl"), styles.text, styles.textShadow]}>
    //     Small steps, big results
    //   </Text>
    //   <StatusBar style="auto" />
    //   <TouchableOpacity
    //     onPress={() => {}}
    //     style={[
    //       tw.style("rounded-lg justify-center items-center"),
    //       styles.button,
    //     ]}
    //     accessibilityLabel="Learn more about this purple button"
    //   >
    //     <Text
    //       style={[
    //         tw.style("text-2xl font-bold"),
    //         styles.text,
    //         styles.textShadow,
    //       ]}
    //     >
    //       Login
    //     </Text>
    //   </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  background: {
    // backgroundColor: "#008DD5",
    backgroundColor: "#0c1e3e",
  },
  text: {
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    // fontFamily: "LuckiestGuy_400Regular",
    fontSize: 20,
    paddingLeft: 10,
    paddingVertical: 20,
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
