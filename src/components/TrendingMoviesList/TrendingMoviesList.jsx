import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TrendingMoviesList = ({trendingMovies}) => {
    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {trendingMovies.map(trendingMovie => (
                    <li key={trendingMovie.id}>
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