import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  AlignLogo,
  Logo,
  NameAplication,
  TextWelcome,
  TextNameApp,
  TextNameApp1,
  AlignButton,
  RegisterButton,
  RegisterButtonText,
  QueryButton,
  QueryButtonBorder,
  QueryButtonText,
} from './styles';

function Home() {
  const navigation = useNavigation();

  return (
    <Container
      colors={['#0065B7', '#6DDCA8']}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.9, y: 1.0 }}
    >
      <AlignLogo>
        <Logo source={require('../../assets/logo.png')} />
      </AlignLogo>

      <NameAplication>
        <TextWelcome>Olá, bem-vindo aos</TextWelcome>

        <TextNameApp>
          Gastos
          {'\n'}
          Púplicos Suspeitos de
        </TextNameApp>

        <TextNameApp1>Parlamentares</TextNameApp1>
      </NameAplication>

      <AlignButton>
        <RegisterButton onPress={() => navigation.navigate('Register')}>
          <RegisterButtonText>Cadastro de Parlamentares</RegisterButtonText>
        </RegisterButton>

        <QueryButton onPress={() => navigation.navigate('Main')}>
          <QueryButtonBorder>
            <QueryButtonText>Consulta de Parlamentares</QueryButtonText>
          </QueryButtonBorder>
        </QueryButton>
      </AlignButton>
    </Container>
  );
}

export default Home;
