import React, { useState } from "react";
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';
import tw from "tailwind-react-native-classnames";

import Home from './screens/home.js';

export default function App() {
  return (
    <Navigator />
  );
}