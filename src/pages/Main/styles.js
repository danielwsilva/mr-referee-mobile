import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

export const Parlamentar = styled.View`
  padding: 0 28px 0 28px;
  margin-top: 20px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const AlignText = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 17px;
  color: #0065b7;
`;

export const Partido = styled.Text`
  font-family: 'Glegoo-Regular';
  font-size: 14px;
  color: #262626;
  opacity: 0.6;
`;

export const ArrowRight = styled(Icon).attrs({
  name: 'chevron-right',
  color: '#0065B7',
  size: 40,
})`
  position: absolute;
  margin-top: 10px;
  margin-left: 247px;
  width: 40px;
`;

export const View = styled.View`
  align-items: center;
  justify-content: center;
`;
