import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/home.js";
import Tasks from "../screens/tasks.js";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
    },
  },
  Tasks: {
    screen: Tasks,
    navigationOptions: {
      title: "Tasks",
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
