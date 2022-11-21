import React, {useState} from 'react';
import FormMovie from "../Movies/FormMovie.jsx";
import {MoviesProvider} from "../Context/MoviesContext";
import ListMovie from "../Movies/ListMovie.jsx";

const Movies = () => {
    const [movies, setMovies] = useState([
        {
            name: "truc",
            year: "2001",
        },
        {
            name: "machin",
            year: "2011",
        },
        {
            name: "prout",
            year: "2021",
        },
    ])

    return (
        <div>
            <h1>Movies</h1>
            <MoviesProvider
                initialValue={{
                    movies,
                    setMovies
                }}
            >
                <FormMovie movies={movies} setMovies={setMovies}/>
                <ListMovie movies={movies}/>
            </MoviesProvider>
        </div>
    );
};

export default Movies;