import React, {useState} from 'react';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';
import FingerPrintIcon from '../assets/images/tabs/fingerprint.svg';
import FlightIcon from '../assets/images/tabs/flight.svg';
import HealthIcon from '../assets/images/tabs/health.svg';
import HistoryIcon from '../assets/images/tabs/history.svg';
import MembershipIcon from '../assets/images/tabs/membership.svg';
import WaterDropIcon from '../assets/images/tabs/waterdrop.svg';
import cardDetails from '../store/cardDetails';
import AnimatedButton from './AnimatedButton';
import FloatingButton from './FloatingButton';

const tabImages = [
  FingerPrintIcon,
  FlightIcon,
  WaterDropIcon,
  HealthIcon,
  HistoryIcon,
  MembershipIcon,
];

const {width} = Dimensions.get('screen');

const Tab: React.FC = ({}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const shuffleCards = () => {
    for (let i = cardDetails.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardDetails[i], cardDetails[j]] = [cardDetails[j], cardDetails[i]];
    }
    return cardDetails;
  };

  return (
    <View className="bg-app-grey flex-1 px-5">
      <View className="flex-row justify-between py-4 items-center">
        {tabImages.map((Image, index) => {
          const isSelected = selectedIndex === index;
          return (
            <AnimatedButton
              onPress={() => {
                setSelectedIndex(index);
              }}
              key={index}>
              <Image
                height={isSelected ? 51 : 35}
                width={isSelected ? 51 : 34}
                opacity={isSelected ? 1 : 0.25}
              />
            </AnimatedButton>
          );
        })}
      </View>

      <ReactNativeSwipeableViewStack
        onSwipe={index => {
          console.log(index);
        }}
        initialSelectedIndex={0}
        data={shuffleCards()}
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
              <View className="flex-1 justify-center mb-1">
                <Text className={`${textColor} font-SpaceGrotesk-Bold text-xs`}>
                  {item.bankName}
                </Text>
              </View>

              <View className="flex-[0.7] justify-center mb-5">
                <Text className={`${textColor} font-SpaceGrotesk-Bold text-xl`}>
                  {item.cardNumber}
                </Text>
              </View>

              <View className="flex-1 flex-row  justify-between max-w-[65%]">
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
