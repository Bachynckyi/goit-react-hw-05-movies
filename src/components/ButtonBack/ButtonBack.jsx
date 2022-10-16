import { Link } from "react-router-dom";
import css from './ButtonBack.module.scss'

export const ButtonBack = ({ goBack }) => {
    return (
        <Link to={goBack} className={css.button}>Go back</Link>
    );
};
