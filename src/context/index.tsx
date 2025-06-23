import React, { createContext, useState, useContext, ReactNode } from 'react';

type MovieProps = {
    children: ReactNode;
};

type MovieContext = {
    movies: [];
    setMovies: ([]) => void;
    favorites: [];
    setFavorites: ([]) => void;
};

const defaultValue: MovieContext = {
    movies: [],
    setMovies: ([]) => { },
    favorites: [],
    setFavorites: ([]) => { },
};


const MovieContext = createContext(defaultValue);

function MovieProvider({ children }: MovieProps) {
    const [movies, setMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);

    return (
        <MovieContext.Provider
            value={{ movies, setMovies, favorites, setFavorites }}
        >
            {children}
        </MovieContext.Provider>
    );
}

function useMovie() {
    const context = useContext(MovieContext);

    return context;
}

export { MovieProvider, useMovie };