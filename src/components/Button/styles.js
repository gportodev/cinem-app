import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Button = styled.TouchableOpacity`
    background-color: ${colors.comp_back_one};
    height: 30px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    left: 15px;
    flex-grow: 0.2;
    border: 1px;
    border-style: dotted;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: ${colors.comp_back_two};
`;
