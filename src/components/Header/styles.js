import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

export const Container = styled.View`
    margin-top: ${`${Constants.statusBarHeight}px`};
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: ${colors.comp_back_two};
`;
export const Description = styled.Text`
    font-size: 14px;
    color: ${colors.comp_back_two};
`;
