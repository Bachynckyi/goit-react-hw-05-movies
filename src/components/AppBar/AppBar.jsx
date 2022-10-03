import { NavLink } from 'react-router-dom';

export const AppBar = () => {
    const navItems = [
        {href: 'home', text: 'Home'},
        {href: 'movies', text: 'Movies'}
    ];

    return (
        <header>
            <nav>
                {navItems.map(({href, text}) => (
                    <NavLink
                    to={href}
                    key={href}
                    >{text}
                    </NavLink>
            ))}
            </nav>
        </header>
    )
}