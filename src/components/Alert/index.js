import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import alert from '../../assets/animation/alert.json';

import { Mensage, Button, ButtonView, ButtonText } from './styles';

const Alert = ({ mensage, displaysButton }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Lottie resizeMode="contain" autoSize source={alert} autoPlay loop />

      <Mensage>{mensage}</Mensage>

      {displaysButton && (
        <Button onPress={() => navigation.navigate('Register')}>
          <ButtonView>
            <ButtonText>Cadastrar Parlamentar</ButtonText>
          </ButtonView>
        </Button>
      )}
    </SafeAreaView>
  );
};

export default Alert;
