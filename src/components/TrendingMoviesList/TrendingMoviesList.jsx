import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './TrendingMoviesList.module.css';

export const TrendingMoviesList = ({trendingMovies, title}) => {
    return (
        <div>
            {title && <h1 className={css.trendingTittle}>{title}</h1>}
            <ul className={css.moviesList}>
                {trendingMovies.map(trendingMovie => (
                    <li key={trendingMovie.id} >
                        <Link to={`/movies/${trendingMovie.id}`}>{trendingMovie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

TrendingMoviesList.propTypes = {
    trendingMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ),
};