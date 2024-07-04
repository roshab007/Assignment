/// <reference types="nativewind/types" />

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module 'react-native-swipeable-view-stack' {
  type Props<ItemT> = {
    onSwipe: (index: number) => void;
    initialSelectedIndex: number;
    data: ReadonlyArray<ItemT>;
    renderItem: (element: ItemT) => void;
    onItemClicked: (element: ItemT) => void;
    stackSpacing: number;
  };

  const content: <ItemT>(props: Props<ItemT>) => React.ReactElement;

  export default content;
}
