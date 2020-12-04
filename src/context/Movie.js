import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export default function MovieProvider({ children }) {
    const [movies, setMovies] = useState();

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
}

export function useMovie() {
    const context = useContext(MovieContext);

    const { movies, setMovies } = context;

    return { movies, setMovies };
}
