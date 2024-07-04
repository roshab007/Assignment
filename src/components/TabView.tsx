import React from 'react';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';
import FingerPrintIcon from '../assets/images/tabs/fingerprint.svg';
import FlightIcon from '../assets/images/tabs/flight.svg';
import HealthIcon from '../assets/images/tabs/health.svg';
import HistoryIcon from '../assets/images/tabs/history.svg';
import MembershipIcon from '../assets/images/tabs/membership.svg';
import WaterDropIcon from '../assets/images/tabs/waterdrop.svg';
import cardDetails from '../store/cardDetails';

interface TabProps {}

const tabImages = [
  FingerPrintIcon,
  FlightIcon,
  WaterDropIcon,
  HealthIcon,
  HistoryIcon,
  MembershipIcon,
];

const {width} = Dimensions.get('screen');
const paddinghorizontal = width - 500;
console.log(paddinghorizontal);

const Tab: React.FC<TabProps> = ({}) => {
  return (
    <View className="bg-app-grey flex-1 px-5">
      <View className="flex-row justify-between py-12 items-center">
        {tabImages.map((Image, index) => {
          return <Image key={index} />;
        })}
      </View>

      <ReactNativeSwipeableViewStack
        onSwipe={swipedIndex => console.log(swipedIndex)}
        initialSelectedIndex={0}
        data={cardDetails}
        renderItem={item => {
          return (
            <ImageBackground
              source={item.image}
              resizeMode="contain"
              style={{
                width: width,
                height: 300,
              }}
              className="px-[8%]">
              <Text className="text-white font-SpaceGrotesk-Bold text-xs mt-[12%]">
                {item.bankName}
              </Text>
              <Text className="text-white font-SpaceGrotesk-Bold text-xl mt-[18%]">
                {item.cardNumber}
              </Text>

              <View className="flex-row mt-[18%] w-[67%] justify-between">
                <Text className="text-white font-SpaceGrotesk-Bold text-base">
                  {item.name}
                </Text>
                <Text className="text-white font-SpaceGrotesk-Bold text-base">
                  {item.expiry}
                </Text>
              </View>
            </ImageBackground>
          );
        }}
        onItemClicked={item => {
          console.log('itemclicked', item);
        }}
        stackSpacing={20}
      />
    </View>
  );
};

export default Tab;
