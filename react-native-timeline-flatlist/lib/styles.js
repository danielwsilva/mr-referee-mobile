import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonDocument = styled(RectButton)`
    margin-top: 5px;
    margin-bottom: 10px;
    height: 30px;
    width: 120px;
    background: ${(props) => (props.color_suspicions ? '#f57706' : '#0065B7')};
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;
