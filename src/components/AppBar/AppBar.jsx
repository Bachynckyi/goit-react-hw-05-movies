import { NavLink } from 'react-router-dom';
import css from './AppBar.module.scss';


export const AppBar = () => {
    const navItems = [
        {href: 'home', text: 'Home'},
        {href: 'movies', text: 'Movies'}
    ];

    return (
        <header className={css.header}>
            <nav>
                {navItems.map(({href, text}) => (
                    <NavLink
                    className={({ isActive }) =>
                        isActive ? `${css.active}` : `${css.link}`
                    }
                    to={href}
                    key={href}
                    >{text}
                    </NavLink>
            ))}
            </nav>
        </header>
    );
};