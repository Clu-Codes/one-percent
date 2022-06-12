import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// import {
//   useFonts,
//   LuckiestGuy_400Regular,
// } from "@expo-google-fonts/luckiest-guy";

import Home from "../screens/home.js";
import Tasks from "../screens/tasks.js";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "🏠 Home",
      headerStyle: {
        backgroundColor: "#0c1e3e",
      },
      headerTintColor: "#FFF1D0",
      headerTitleStyle: {
        // fontFamily: "LuckiestGuy_400Regular",
        fontSize: 23,
      },
    },
    Tasks: {
      screen: Tasks,
      navigationOptions: {
        title: "Tasks",
      },
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
