import { Link } from "react-router-dom";

export const ButtonBack = ({ goBack }) => {
    return (
        <Link to={goBack}>Go back</Link>
    );
};