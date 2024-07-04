import React from 'react';
import {Text, View} from 'react-native';
import {Images} from '../utils/images';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View className="bg-black px-5 pt-5 pb-[54px]">
      <View className="flex-row justify-between">
        <Images.HeaderIcon />

        <View className="flex-row justify-around items-center px-[14px] h-[52px] rounded bg-app-grey">
          <Images.Tips />
          <Text className="text-white ml-1 text-lg font-Roboto-Regular">
            Tips
          </Text>
        </View>
      </View>

      <Text className="text-white font-Helvetica-Bold mt-5 text-3xl">
        All your credit cards
      </Text>

      <Text className="text-white font-Helvetica-Regular mt-5 text-[17px]">
        Find all your credit cards here
      </Text>
    </View>
  );
};

export default Header;
