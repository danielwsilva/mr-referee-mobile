import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: ${(props) => (props.heightRegister ? '260px' : '220px')};
  padding: 28px;
  background: #0065b7;
`;

export const AlignLogo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonBack = styled(RectButton)`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const Logo = styled.Image`
  height: 33.71px;
  width: 120px;
  margin-top: 10px;
`;

export const TextAlign = styled.View`
  margin-top: ${(props) => (props.marginParl ? '30px' : '50px')};
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 17px;
  color: #fff;
`;

export const TextHeader = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 15px;
  text-align: center;
  color: #fff;
  opacity: 0.7;
  margin-top: 10px;
`;
