import React, { useState } from 'react';

import { Text } from 'react-native';

import api from '../../services/api';

import { Button, Title } from '../../components/Button/styles';
import { Input } from '../../components/Input/styles';

import Header from '../../components/Header';

import { Container, Search } from './styles';

import colors from '../../styles/colors';

export default function Buscar() {
    const [movie, setMovie] = useState();

    const searchMovie = () => {
        console.log(movie);
    };

    return (
        <Container>
            <Header />

            <Search>
                <Input
                    placeholder="O que você busca..."
                    placeholderTextColor={colors.comp_plac_color}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(text) => setMovie(text)}
                    value={movie}
                    // onSubmitEditing={}
                />

                <Button onPress={searchMovie}>
                    <Title>Buscar</Title>
                </Button>
            </Search>
        </Container>
    );
}
