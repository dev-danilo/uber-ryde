import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

const NotFoundScreen = () => (
  <>
    <Stack.Screen options={{ title: "Oops!" }} />
    <View className="flex-1 justify-center items-center p-5">
      <Text>This screen doesn't exist.</Text>
      <Link href="/" className="py-4 mt-4">
        <Text>Go to home screen!</Text>
      </Link>
    </View>
  </>
);
export default NotFoundScreen;
