import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "@/types/type";
import { Image, Text, View } from "react-native";

const RideCard = ({
  ride: {
    destination_longitude,
    destination_latitude,
    origin_address,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status,
  },
}: {
  ride: Ride;
}) => (
  <View className="flex flex-row justify-center items-center mb-3 bg-white rounded-lg shadow-sm shadow-neutral-300">
    <View className="flex flex-col justify-center items-center p-3">
      <View className="flex flex-row justify-between items-center">
        <Image
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
          }}
          className="w-[80px] h-[90px] rounded-lg"
        />

        <View className="flex flex-col flex-1 gap-y-5 mx-5">
          <View className="flex flex-row gap-x-2 items-center">
            <Image source={icons.to} className="w-5 h-5" />
            <Text className="font-JakartaMedium ">{origin_address}</Text>
          </View>
          <View className="flex flex-row gap-x-2 items-center">
            <Image source={icons.point} className="w-5 h-5" />
            <Text className="font-JakartaMedium" numberOfLines={1}>
              {destination_address}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex flex-col justify-center items-start p-3 mt-5 w-full bg-general-500 rounded-lg">
        <View className="flex flex-row justify-between items-center mb-5 w-full">
          <Text className="font-JakartaMedium text-gray-500">Date & Time</Text>
          <Text className="font-JakartaMedium text-gray-500">
            {formatDate(created_at)}, {formatTime(ride_time)}
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center mb-5 w-full">
          <Text className="font-JakartaMedium text-gray-500">Driver</Text>
          <Text className="font-JakartaMedium text-gray-500">
            {driver.first_name} {driver.last_name}
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center mb-5 w-full">
          <Text className="font-JakartaMedium text-gray-500">Car Seats</Text>
          <Text className="font-JakartaMedium text-gray-500">
            {driver.car_seats}
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center mb-5 w-full">
          <Text className="font-JakartaMedium text-gray-500">Payment</Text>
          <Text
            className={`font-JakartaMedium capitalize text-gray-500 ${payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
          >
            {payment_status}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default RideCard;
