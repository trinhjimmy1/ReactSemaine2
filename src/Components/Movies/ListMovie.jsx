import React from 'react';
import Movie from "./Movie.jsx";

const ListMovie = ({movies}) => {
    console.log(movies);
    return (
        <div>
            <h1>ListMovie</h1>
            {
                movies.map((movie, index) => (
                    <Movie key={index} movie={movie} index={index}/>
                ))
            }
        </div>
    );
};

export default ListMovie;