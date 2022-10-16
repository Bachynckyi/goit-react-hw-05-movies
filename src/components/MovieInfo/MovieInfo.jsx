import PropTypes from 'prop-types';
import css from './MovieInfo.module.scss';

export const MovieInfo = ({ movie }) => {
    const {
        poster_path,
        title,
        release_date,
        overview,
        genres,
        vote_average,
    } = movie;
    const userScore = Math.round(vote_average * 10);
    const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
    return (
        <div className={css.container}>
            <div >
                <img 
                    src={poster}
                    alt={title}
                    width="300"
                    className={css.moviePoster}
                />
            </div>
            <div>
                <h2>{title} ({release_date.slice(0, 4)})</h2>
                    <p>User Score: {userScore}%</p>
                <h3>Overview</h3>
                    <p>{overview}</p>
                <h4>Genres</h4>
                    <p>{genres.map(({ name }) => name).join(', ')}</p>
            </div>
        </div>
    );
};

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(
            PropTypes.shape({ name: PropTypes.string.isRequired })),
    }).isRequired,
};