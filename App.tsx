import { StatusBar } from 'expo-status-bar';
// import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useFonts, LuckiestGuy_400Regular } from '@expo-google-fonts/luckiest-guy';

export default function App() {
  let [fontsLoaded] = useFonts({
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return <View><Text>Hi! I am Loading!</Text></View>;
  }

  return (
    <View style={tw.style('justify-center items-center bg-blue-700 flex-1')}>
      <Text style={{fontFamily: 'LuckiestGuy_400Regular', fontSize: 90, color: 'white'}}>1%</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 80
//     font: : 
//   },
// });
