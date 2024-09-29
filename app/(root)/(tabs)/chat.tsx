import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";

const Chat = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text className="font-JakartaBold text-2xl">Chat</Text>
        <View className="flex flex-1 justify-center items-center h-fit">
          <Image
            source={images.message}
            alt="message"
            className="w-full h-40"
            resizeMode="contain"
          />
          <Text className="mt-3 font-JakartaBold text-3xl">
            No Messages Yet
          </Text>
          <Text className="px-7 mt-2 text-base text-center">
            Start a conversation with your friends and family
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
