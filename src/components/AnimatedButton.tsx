import React, {ReactNode, useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';

interface AnimatedButtonProps {
  onPress: () => void;
  children: ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({onPress, children}) => {
  const [scaleValue] = useState(new Animated.Value(1));

  return (
    <TouchableOpacity
      style={{transform: [{scale: scaleValue}]}}
      className="justify-center items-center"
      onPress={() => {
        onPress();
        Animated.sequence([
          Animated.spring(scaleValue, {
            toValue: 1.2,
            friction: 3,
            useNativeDriver: true,
          }),
          Animated.spring(scaleValue, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
          }),
        ]).start();
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default AnimatedButton;
