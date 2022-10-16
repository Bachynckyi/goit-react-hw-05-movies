import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.scss';

export const MoviesList = ({movies, title}) => {
    const location = useLocation();
    return (
        <div>
            {title && <h1 className={css.trendingTittle}>{title}</h1>}
            <ul className={css.moviesList}>
                {movies.map(movie => (
                    <li key={movie.id} className={css.itemMovie}>
                        <Link to={`/movies/${movie.id}`}
                              state={{ from: location }}>
                        {movie.title}       
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ),
};