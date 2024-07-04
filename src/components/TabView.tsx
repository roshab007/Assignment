import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';
import FingerPrintIcon from '../assets/images/tabs/fingerprint.svg';
import FlightIcon from '../assets/images/tabs/flight.svg';
import HealthIcon from '../assets/images/tabs/health.svg';
import HistoryIcon from '../assets/images/tabs/history.svg';
import MembershipIcon from '../assets/images/tabs/membership.svg';
import WaterDropIcon from '../assets/images/tabs/waterdrop.svg';
import cardDetails from '../store/cardDetails';
import FloatingButton from './FloatingButton';

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

const Tab: React.FC<TabProps> = ({}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View className="bg-app-grey flex-1 px-5">
      <View className="flex-row justify-between py-4 items-center">
        {tabImages.map((Image, index) => {
          const isSelected = selectedIndex === index;
          return (
            <TouchableOpacity
              className="justify-center items-center"
              onPress={() => setSelectedIndex(index)}
              key={index}>
              <Image
                height={isSelected ? 51 : 35}
                width={isSelected ? 51 : 34}
                opacity={isSelected ? 1 : 0.25}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <ReactNativeSwipeableViewStack
        onSwipe={index => {
          console.log(index);
        }}
        initialSelectedIndex={0}
        data={cardDetails}
        renderItem={item => {
          const textColor =
            item.id === 9 || item.id === 8 ? 'text-black' : 'text-white';

          return (
            <ImageBackground
              source={item.image}
              resizeMode="contain"
              style={{
                width: width,
                height: 300,
              }}
              className="px-[8%]">
              <Text
                className={`${textColor} font-SpaceGrotesk-Bold text-xs mt-[12%]`}>
                {item.bankName}
              </Text>
              <Text
                className={`${textColor} font-SpaceGrotesk-Bold text-xl mt-[18%]`}>
                {item.cardNumber}
              </Text>

              <View className="flex-[0.9] flex-row items-center justify-between max-w-[65%]">
                <View>
                  <Text
                    className={`${textColor} font-SpaceGrotesk-Regular text-xs opacity-80`}>
                    Card Holder Name
                  </Text>
                  <Text
                    className={`${textColor} font-SpaceGrotesk-Bold text-base`}>
                    {item.name}
                  </Text>
                </View>

                <View>
                  <Text
                    className={`${textColor} font-SpaceGrotesk-Regular text-xs opacity-80`}>
                    Expiry Date
                  </Text>
                  <Text
                    className={`${textColor} font-SpaceGrotesk-Bold text-base`}>
                    {item.expiry}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          );
        }}
        onItemClicked={item => {
          console.log('itemclicked', item);
        }}
        stackSpacing={20}
      />
      <FloatingButton />
    </View>
  );
};

export default Tab;
