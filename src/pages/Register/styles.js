import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const AlignPhoto = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const Photo = styled.Image`
  height: 80px;
  width: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  opacity: 0.8;
  border-width: 2px;
  border-radius: 50px;
`;

export const Form = styled.View`
  padding: 10px 30px 0px 30px;
`;

export const Text = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 15px;
  color: #0065b7;
  opacity: 0.7;
  margin-top: 10px;
`;

export const LayoutDropDownList = styled.View`
  margin-top: -10px;
  border-bottom-width: 1px;
  border-bottom-color: #0065b7;
`;

export const SubmitButton = styled(RectButton)`
  margin-top: 30px;
  height: 64px;
  width: 330px;
  background: #f57706;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const RegisterButtonText = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 16px;
  color: #fff;
`;

export const Button = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const BackButton = styled(RectButton)`
  height: 64px;
  width: 330px;
  background: transparent;
`;

export const BackButtonBorder = styled.View`
  height: 64px;
  width: 330px;
  border-color: #0065b7;
  border-width: 1px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const BackButtonText = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 16px;
  color: #0065b7;
`;
