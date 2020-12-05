import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export default function MovieProvider({ children }) {
    const [movies, setMovies] = useState();
    const [favorites, setFavorites] = useState();

    return (
        <MovieContext.Provider
            value={{ movies, setMovies, favorites, setFavorites }}
        >
            {children}
        </MovieContext.Provider>
    );
}

export function useMovie() {
    const context = useContext(MovieContext);

    const { movies, setMovies } = context;

    const { favorites, setFavorites } = context;

    return { movies, setMovies, favorites, setFavorites };
}
