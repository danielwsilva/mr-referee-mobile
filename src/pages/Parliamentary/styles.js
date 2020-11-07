import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding-top: 10px;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  opacity: 0.8;
  border-width: 2px;
  border-radius: 50px;
`;

export const View = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Reembolso = styled.View`
  height: 40px;
  width: 160px;
  background: ${(props) => (props.transition ? 'transparent' : '#0065B7')};
  ${(props) =>
    props.transition
      ? 'border-width:  1px; border-color: #0065B7; '
      : 'border-width:  0px;'}
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

export const Button = styled(RectButton)`
  width: 160px;
  height: 40px;
  background: transparent;
  justify-content: center;
  align-items: center;
`;

export const TextButtonReembolso = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 14px;
  color: ${(props) => (props.transition ? '#0065B7' : '#fff')};
`;

export const Alterar = styled.View`
  height: 40px;
  width: 160px;
  background: ${(props) => (props.transition ? '#0065B7' : 'transparent')};
  ${(props) =>
    props.transition
      ? 'border-width:  0px;'
      : 'border-width:  1px; border-color: #0065B7;'}
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`;

export const TextButtonAlterar = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 14px;
  color: ${(props) => (props.transition ? '#fff' : '#0065B7')};
`;
