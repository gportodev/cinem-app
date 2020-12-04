import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const List = styled.FlatList``;

export const Card = styled.View`
    width: 300px;
    height: 65px;
    background-color: ${colors.comp_back_two};
    margin: 5px;
    padding: 10px;
`;

export const Line = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Column = styled.View`
    flex-direction: column;
`;

export const Ball = styled.View`
    border-radius: 100px;
    width: 20px;
    height: 20px;
    margin: 2px;
    background-color: blue;
`;

export const Data = styled.Text`
    font-size: 12px;
`;

export const Icon = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;
