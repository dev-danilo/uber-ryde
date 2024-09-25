import { useUser } from "@clerk/clerk-expo";
import { Image, Text, View } from "react-native";

import Payment from "@/components/Payment";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { formatTime } from "@/lib/utils";
import { useDriverStore, useLocationStore } from "@/store";
import { useMemo } from "react";

import { StripeProvider } from "@stripe/stripe-react-native";

const BookRide = () => {
  const { user } = useUser();
  const { userAddress, destinationAddress } = useLocationStore();
  const { drivers, selectedDriver } = useDriverStore();

  const snapPoints = useMemo(() => ["60%", "95%"], []);

  const driverDetails = drivers?.filter(
    (driver) => +driver.id === selectedDriver,
  )[0];

  return (
    <StripeProvider
      publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      merchantIdentifier="merchant.uber.com"
      urlScheme="myapp"
    >
      <RideLayout title="Book Ride" snapPoints={snapPoints}>
        <>
          <Text className="mb-3 font-JakartaSemiBold text-xl">
            Ride Information
          </Text>

          <View className="flex flex-col justify-center items-center mt-10 w-full">
            <Image
              source={{ uri: driverDetails?.profile_image_url }}
              className="w-28 h-28 rounded-full"
            />

            <View className="flex flex-row justify-center items-center mt-5 space-x-2">
              <Text className="font-JakartaSemiBold text-lg">
                {driverDetails?.title}
              </Text>

              <View className="flex flex-row items-center space-x-0.5">
                <Image
                  source={icons.star}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="font-JakartaMedium text-lg">
                  {driverDetails?.rating}
                </Text>
              </View>
            </View>
          </View>

          <View className="flex flex-col justify-center items-start py-3 px-5 mt-5 w-full bg-general-600 rounded-3xl">
            <View className="flex flex-row justify-between items-center py-3 w-full border-b border-white">
              <Text className="font-JakartaMedium text-lg">Ride Price</Text>
              <Text className="font-JakartaMedium text-lg text-[#0CC25F]">
                ${driverDetails?.price}
              </Text>
            </View>

            <View className="flex flex-row justify-between items-center py-3 w-full border-b border-white">
              <Text className="font-JakartaMedium text-lg">Pickup Time</Text>
              <Text className="font-JakartaMedium text-lg">
                {formatTime(parseInt(`${driverDetails.time}`))}
              </Text>
            </View>

            <View className="flex flex-row justify-between items-center py-3 w-full">
              <Text className="font-JakartaMedium text-lg">Car Seats</Text>
              <Text className="font-JakartaMedium text-lg">
                {driverDetails?.car_seats}
              </Text>
            </View>
          </View>

          <View className="flex flex-col justify-center items-start mt-5 w-full">
            <View className="flex flex-row justify-start items-center py-3 mt-3 w-full border-y border-general-700">
              <Image source={icons.to} className="w-6 h-6" />
              <Text className="ml-2 font-JakartaMedium text-lg">
                {userAddress}
              </Text>
            </View>

            <View className="flex flex-row justify-start items-center py-3 w-full border-b border-general-700">
              <Image source={icons.point} className="w-6 h-6" />
              <Text className="ml-2 font-JakartaMedium text-lg">
                {destinationAddress}
              </Text>
            </View>
          </View>
          <Payment
            fullName={user?.fullName!}
            email={user?.emailAddresses[0].emailAddress!}
            amount={driverDetails?.price!}
            driverId={driverDetails?.id}
            rideTime={driverDetails?.time!}
          />
        </>
      </RideLayout>
    </StripeProvider>
  );
};

export default BookRide;
