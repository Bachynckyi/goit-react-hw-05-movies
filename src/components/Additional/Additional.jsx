import { Link } from "react-router-dom";
import css from './Additional.module.scss';


export const Additional = ({location}) => {
    const additionalItems = [
        {href: "cast", text: "Cast" },
        {href: "reviews", text: "Reviews"},
    ]
    return (
        <div className={css.container}>
            <h4 className={css.titleAdditional}>Additional information</h4>
            <ul>
                {additionalItems.map(({ href, text }) => (
                    <li key={href}>
                        <Link to={href} state={{from: location}}>{text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};