import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { Alert } from 'react-native';
import api from '../../services/api';

import { useMovie } from '../../context/Movie';

import { Button, Title } from '../../components/Button/styles';
import { Input } from '../../components/Input/styles';

import Header from '../../components/Header';

import { Container, Find } from './styles';

import {
    List,
    Ball,
    Card,
    Line,
    Column,
    Data,
    Icon,
} from '../../components/Card/styles';

import colors from '../../styles/colors';

export default function Buscar() {
    const [movie, setMovie] = useState();
    const { movies, setMovies } = useMovie();
    const { favorites, setFavorites } = useMovie([]);

    async function searchMovie() {
        if (movie === undefined) {
            Alert.alert('Insira o nome do filme!');
        } else {
            const response = await api.get(`?apikey=925eba28&s=${movie}`);

            const { Search } = response.data;

            if (!Search) {
                Alert.alert('Filme não existe!');
            } else {
                setMovies(Search);
            }
        }
    }

    function addFavoriteMovie(item) {
        const fav = movies.map((m) => {
            return m.imdbID === item.imdbID ? { ...m, favorite: true } : m;
        });

        setMovies(fav);

        if (favorites) {
            setFavorites((state) => [...state, item]);
        } else {
            setFavorites([item]);
        }
    }

    const renderItem = ({ item }) => (
        <Card>
            <Column>
                <Line>
                    <Ball />
                    <Data>{item.Title}</Data>
                </Line>
                <Line style={{ justifyContent: 'space-between' }}>
                    <Data style={{ left: 25 }}>Ano:{item.Year}</Data>
                    <Icon
                        style={{ bottom: 13 }}
                        onPress={() => addFavoriteMovie(item)}
                    >
                        {item.favorite ? (
                            <Feather
                                name="star"
                                size={24}
                                color={colors.comp_icon_active}
                            />
                        ) : (
                            <Feather
                                name="star"
                                size={24}
                                color={colors.comp_icon_inative}
                            />
                        )}
                    </Icon>
                </Line>
            </Column>
        </Card>
    );

    return (
        <Container>
            <Header />

            <Find>
                <Input
                    placeholder="O que você busca..."
                    placeholderTextColor={colors.comp_plac_color}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(text) => setMovie(text)}
                    value={movie}
                    onSubmitEditing={searchMovie}
                />

                <Button onPress={searchMovie}>
                    <Title>Buscar</Title>
                </Button>
            </Find>

            <List
                data={movies}
                renderItem={renderItem}
                keyExtractor={(item) => item.imdbID}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center',
                }}
            />
        </Container>
    );
}
