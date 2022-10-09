import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import * as API from '../serviceAPI/serviceApi';
import { TrendingMoviesList } from '../components/TrendingMoviesList/TrendingMoviesList';

export const MoviesSearch = () => {
    const [movies, setMovies] = useState(null);
    const [inputQuery, setInputQuery] = useState("");
    const [totalMovies, setTotalMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    

    useEffect(() => {
        if (query === '') {
            return;
        };

        setMovies(null);

        API.getMoviesSearch(query)
            .then(data => {setMovies(data.results); setTotalMovies(data.total_results)})
            .catch(console.log)
    }, [query]);

    const onChange = e => {
        setInputQuery(e.currentTarget.value);
      };

    const onSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const transformQuery = form.query.value.toLowerCase().trim();
        setSearchParams({ query: transformQuery });
        setMovies([]);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    name='query'
                    placeholder="Search movie"
                    value={inputQuery}
                />
                <button type="Search">Search</button>
            </form>
            {movies && <TrendingMoviesList trendingMovies={movies}/>}
            {totalMovies === 0 && <div>Not found movies</div>}
        </div>
    );
};