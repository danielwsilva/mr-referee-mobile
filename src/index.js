import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from "react-native-flash-message";

import './config/ReactotronConfig';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0065B7"/>
      <Routes />
      <FlashMessage/>   
    </>
  );
};

export default App;
