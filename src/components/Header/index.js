import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  AlignLogo,
  ButtonBack,
  Logo,
  TextAlign,
  TitleHeader,
  TextHeader,
} from './styles';

const Header = ({
  title,
  description,
  comeback,
  heightRegister,
  marginParl,
}) => {
  const navigation = useNavigation();

  return (
    <Container heightRegister={heightRegister}>
      <AlignLogo>
        <ButtonBack onPress={() => navigation.navigate(comeback)}>
          <Icon name="arrow-left" color="#fff" size={30} />
        </ButtonBack>
        <Logo source={require('../../assets/logo.png')} />
      </AlignLogo>

      <TextAlign marginParl={marginParl}>
        <TitleHeader>{title}</TitleHeader>
        <TextHeader>{description}</TextHeader>
      </TextAlign>
    </Container>
  );
};

export default Header;
