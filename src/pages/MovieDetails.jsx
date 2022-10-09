import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { Additional } from 'components/Additional/Additional';
import * as API from '../serviceAPI/serviceApi';

import  { MovieInfo} from '../components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
    const { movieId }= useParams();
    const [ movie, setMovie] = useState();

    useEffect(() => {
        API.getMovieById(movieId)
            .then(setMovie)
            .catch(console.log)
    }, [movieId])

    if (!movie) {
        return;
      }

    return (
        <>
            <ButtonBack />
            <MovieInfo movie={movie}/>
            <Additional />
        </>
    );
};