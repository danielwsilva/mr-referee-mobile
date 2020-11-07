import React from 'react';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import loadging from '../../assets/animation/loading.json';

const Loading = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Lottie resizeMode="contain" autoSize source={loadging} autoPlay loop />
    </SafeAreaView>
  );
};

export default Loading;
