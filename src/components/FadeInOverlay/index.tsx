import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export default function FadeInOverlay<StyleProps>(props: {
  children: React.ReactNode;
  style: StyleProps;
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    fadeOut();
  });
  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
}
