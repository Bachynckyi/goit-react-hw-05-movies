import { Link } from "react-router-dom";


export const Additional = () => {
    const additionalItems = [
        {href: "cast", text: "Cast" },
        {href: "reviews", text: "Reviews"},
    ]
    return (
        <div>
            <h4>Additional information</h4>
            <ul>
                {additionalItems.map(({ href, text }) => (
                    <li key={href}>
                        <Link to={href}>{text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};