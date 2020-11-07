import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

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

export const AlterButton = styled(RectButton)`
  margin-top: 10px;
  height: 64px;
  width: 330px;
  background: #f57706;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const AlterButtonText = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 16px;
  color: #fff;
`;

export const Button = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const RemoveButton = styled(RectButton)`
  height: 64px;
  width: 330px;
  background: transparent;
`;

export const RemoveButtonBorder = styled.View`
  height: 64px;
  width: 330px;
  border-color: #0065b7;
  border-width: 1px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const RemoveButtonText = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 16px;
  color: #0065b7;
`;

export const ViewCheck = styled.View`
  flex-direction: row;
  align-self: flex-end;
  margin: 5px 0;
`;

export const Check = styled(CheckBox)`
  margin-top: 8px;
  margin-left: 5px;
`;
