import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Mensage = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 15px;
  color: #262626;
  opacity: 0.6;
  text-align: center;
`;

export const Button = styled(RectButton)`
  height: 50px;
  width: 200px;
  background: transparent;
  margin-top: 20px;
`;

export const ButtonView = styled.View`
  height: 50px;
  width: 200px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #0065b7;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 12px;
  color: #0065b7;
`;
