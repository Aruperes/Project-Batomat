import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

const Floating = ({children, duration = 1000, floatRange = 10}) => {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -floatRange,
          duration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: floatRange,
          duration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [floatAnim, duration, floatRange]);

  return (
    <Animated.View style={{transform: [{translateY: floatAnim}]}}>
      {children}
    </Animated.View>
  );
};

export default Floating;
