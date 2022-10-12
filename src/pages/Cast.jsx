import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../serviceAPI/serviceApi';

const Cast = () => {
    const [ cast, setCast ] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        API.getMovieCast(movieId)
            .then(data => setCast(data))
            .catch(console.log)
    }, [movieId]);
    
    if(!cast) {
        return;
    };

    return (
        <div>
        {cast.length > 0 ? (
            <ul>
              {cast
                .map(({ id, name, character, profile_path }) => (
                  <li key={id}>
                    {profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        alt={name}
                        width="100"
                      />
                    ) : (
                      <img
                        src="https://demofree.sirv.com/nope-not-here.jpg?w=100"
                        alt={name}
                        width="100"
                      />
                    )}
                    <div>
                      <p>{name}</p>
                      <p>Character: {character}</p>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <div>No casts</div>
          )}
    </div>
    );
};


export default Cast;