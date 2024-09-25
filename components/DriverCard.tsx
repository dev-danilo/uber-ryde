import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants";
import { formatTime } from "@/lib/utils";
import { DriverCardProps } from "@/types/type";

const DriverCard = ({ item, selected, setSelected }: DriverCardProps) => {
  return (
    <TouchableOpacity
      onPress={setSelected}
      className={`${selected === item.id ? "bg-general-600" : "bg-white"} flex flex-row items-center justify-between py-5 px-3 rounded-xl`}
    >
      <Image
        source={{ uri: item.profile_image_url }}
        className="w-14 h-14 rounded-full"
      />

      <View className="flex flex-col flex-1 justify-center items-start mx-3">
        <View className="flex flex-row justify-start items-center mb-1">
          <Text className="font-JakartaMedium text-lg">{item.title}</Text>

          <View className="flex flex-row items-center ml-2 space-x-1">
            <Image source={icons.star} className="w-3.5 h-3.5" />
            <Text className="font-JakartaMedium text-sm">4</Text>
          </View>
        </View>

        <View className="flex flex-row justify-start items-center">
          <View className="flex flex-row items-center">
            <Image source={icons.dollar} className="w-4 h-4" />
            <Text className="ml-1 font-JakartaMedium text-sm">
              ${item.price}
            </Text>
          </View>

          <Text className="mx-1 font-JakartaMedium text-sm text-general-800">
            |
          </Text>

          <Text className="font-JakartaMedium text-sm text-general-800">
            {formatTime(parseInt(`${item.time}`!))}
          </Text>

          <Text className="mx-1 font-JakartaMedium text-sm text-general-800">
            |
          </Text>

          <Text className="font-JakartaMedium text-sm text-general-800">
            {item.car_seats} seats
          </Text>
        </View>
      </View>

      <Image
        source={{ uri: item.car_image_url }}
        className="w-14 h-14"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default DriverCard;
