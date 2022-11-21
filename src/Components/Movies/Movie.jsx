import React, {useContext} from 'react';
import {MoviesContext} from "../Context/MoviesContext.jsx";
import movies from "../pages/Movies.jsx";

const Movie = ({movie, index}) => {
    const {movies, setMovies} = useContext(MoviesContext);


    const handleClick = () => {
        setMovies(prevState => {
            const newArr = [...prevState];
            newArr.splice(index, 1);
            return newArr;
        })
    };

    // const swap = (obj, prop1, prop2) => {
    //     const tmp = obj[prop1];
    //     obj[prop1] = obj[prop2];
    //     obj[prop2] = tmp;
    // }
    //
    // const moveUp = () => {
    //     if (index > 0) {
    //         swap(movies, index, index - 1);
    //     }
    // }
    //
    // const moveDown = () => {
    //     if (index < movies.length - 1) {
    //         swap(movies, index, index + 1);
    //     }
    // }

    const movePosition = (direction, index) => {
        const newArr = [...movies];
        const movieAlternateIndex = direction ? index - 1 : index + 1;
        newArr[movieAlternateIndex] = movies[index];
        newArr[index] = movies[movieAlternateIndex];
        setMovies(newArr);
    }

    return (
        <div>
            <h1>Movie</h1>
            Nom du film : {movie.name}, Date de sortie du film : {movie.year}
            <button onClick={handleClick}>X</button>
            {
                index !== 0 &&
                <button onClick={() => movePosition(true, index)}>UP</button>
            }
            {
                index !== movies.length - 1 &&
                <button onClick={() => movePosition(false, index)}>DOWN</button>
            }
        </div>
    );
};

export default Movie;