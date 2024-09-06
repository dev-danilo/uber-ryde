import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { OsName } from "@/types/enums";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const OnBoarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex justify-between items-center h-full bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="flex justify-end items-end p-5 w-full"
      >
        <Text className="font-JakartaBold text-lg text-black">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="mx-1 w-[32px] h-[4px] bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="mx-1 w-[32px] h-[4px] bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex justify-center items-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row justify-center items-center mt-10 w-full">
              <Text className="mx-10 text-3xl font-bold text-center text-black">
                {item.title}
              </Text>
            </View>
            <Text className="mx-10 mt-3 font-JakartaSemiBold text-lg text-center text-[#858585]">
              {item.description}{" "}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className={`w-11/12 mt-10 ${Platform.OS === OsName.Android ? "mb-3" : ""}`}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;
