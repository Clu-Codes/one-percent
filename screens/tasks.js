export default function Tasks() {
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
    <View>
      <Text>Sample text.</Text>
    </View>
  );
}
