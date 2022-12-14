import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { Additional } from 'components/Additional/Additional';
import * as API from '../serviceAPI/serviceApi';

import  { MovieInfo} from '../components/MovieInfo/MovieInfo';

const MovieDetails = () => {
    const { movieId }= useParams();
    const [ movie, setMovie] = useState();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        API.getMovieById(movieId)
            .then(setMovie)
            .catch(console.log)
    }, [movieId])

    if (!movie) {
        return;
    };

    return (
        <>
            <ButtonBack goBack={backLinkHref}/>
            <MovieInfo movie={movie}/>
            <Additional location={backLinkHref}/>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetails;