import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../serviceAPI/serviceApi';

export const Cast = () => {
    const [ cast, setCast ] = useState(null);
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
        <div>{movieId}</div>

    )
};