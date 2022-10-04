import * as API from '../serviceAPI/serviceApi';
import { useState, useEffect} from 'react';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
 
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
        <TrendingMoviesList trendingMovies={trendingMovies}/>
    );
};

