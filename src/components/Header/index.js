import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  AlignLogo,
  ArrowLeft,
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
        <ArrowLeft onPress={() => navigation.navigate(comeback)} />
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
