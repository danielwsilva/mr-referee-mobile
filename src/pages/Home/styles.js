import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  padding: 30px;
`;

export const AlignLogo = styled.View`
  align-items: flex-end;
`;

export const Logo = styled.Image`
  height: 33.71px;
  width: 120px;
  margin-top: 10px;
`;

export const NameAplication = styled.View`
  margin-top: 80px;
`;

export const TextWelcome = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 14px;
  color: #fff;
`;

export const TextNameApp = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 17px;
  color: #fff;
  margin-top: 25px;
`;

export const TextNameApp1 = styled.Text`
  font-family: 'Glegoo-Bold';
  font-size: 22px;
  color: #fff;
`;

export const AlignButton = styled.View`
  align-items: center;
  margin-top: 310px;
`;

export const RegisterButton = styled(RectButton)`
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

export const QueryButton = styled(RectButton)`
  height: 64px;
  width: 330px;
  margin-top: 25px;
  background: transparent;
`;

export const QueryButtonBorder = styled.View`
  height: 64px;
  width: 330px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const QueryButtonText = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 16px;
  color: #fff;
`;
