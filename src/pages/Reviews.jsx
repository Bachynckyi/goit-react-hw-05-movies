import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../serviceAPI/serviceApi';

const Reviews = () => {
    const [ review, setReview ] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        API.getMovieReviews(movieId)
            .then(data => setReview(data))
            .catch(console.log)
    }, [movieId]);
    
    if(!review) {
        return;
    };

    return (
        <div>
            {review.length > 0 ? (
            <ul>
                {review.map(({ id, author, content }) => (
                    <li key={id}>Author: {author}
                        <p>{content}</p>
                    </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews</p>
            )}
        </div>
    );
};

export default Reviews;