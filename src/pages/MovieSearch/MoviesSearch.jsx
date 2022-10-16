import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import * as API from '../../serviceAPI/serviceApi';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import css from './MoviesSearch.module.scss'

const MoviesSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [movies, setMovies] = useState(null);
    const [inputQuery, setInputQuery] = useState(query);
    const [totalMovies, setTotalMovies] = useState(null);
    
    

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
                    className={css.input}
                />
                <button type="Search" className={css.button}>Search</button>
            </form>
            {movies && <MoviesList movies={movies}/>}
            {totalMovies === 0 && <div>Not found movies</div>}
        </div>
    );
};

export default MoviesSearch;