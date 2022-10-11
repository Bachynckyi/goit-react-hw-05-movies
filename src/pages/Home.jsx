import * as API from '../serviceAPI/serviceApi';
import { useState, useEffect} from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
 
export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState();

    useEffect(() => {
        API.getTrendingMovies()
            .then(data => {setTrendingMovies(data.results)}) 
            .catch(console.log)
    }, []);

    if(!trendingMovies){
        return;
    }

    return (
        <MoviesList movies={trendingMovies} title={"Trending today"}/>
    );
};

