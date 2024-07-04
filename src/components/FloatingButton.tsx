import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Images} from '../utils/images';

interface FloatingButtonProps {}

const FloatingButton: React.FC<FloatingButtonProps> = ({}) => {
  return (
    <TouchableOpacity
      className={`bg-white h-[102px] w-[102px] rounded-full shadow-md justify-center items-center absolute bottom-4 right-8`}
      activeOpacity={0.5}>
      <Images.Plus />
    </TouchableOpacity>
  );
};

export default FloatingButton;
