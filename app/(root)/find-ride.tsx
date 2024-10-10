import CustomButton from "@/components/CustomButton";
import GoogleTextInput from "@/components/GoogleTextInput";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";
import { router } from "expo-router";
import { useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  const snapPoints = useMemo(() => ["50%", "85%"], []);

  return (
    <RideLayout title="Ride" snapPoints={snapPoints}>
      <View className="absolute right-5">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="justify-center items-center w-7 h-7 bg-slate-200 rounded-full">
            <Image
              source={icons.close}
              resizeMode="contain"
              className="w-4 h-4"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="my-3">
        <Text className="mb-3 font-JakartaSemiBold text-lg">From</Text>
        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
          handlePress={(location) => setUserLocation(location)}
        />
      </View>
      <View className="my-3">
        <Text className="mb-3 font-JakartaSemiBold text-lg">To</Text>
        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#transparent"
          handlePress={(location) => setDestinationLocation(location)}
        />
      </View>
      <CustomButton
        title="Find Now"
        onPress={() => router.push("/(root)/confirm-ride")}
        className="mt-2"
      />
    </RideLayout>
  );
};

export default FindRide;
