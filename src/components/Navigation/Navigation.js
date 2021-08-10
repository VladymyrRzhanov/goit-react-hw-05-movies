import { NavLink, Link } from 'react-router-dom';
import s from "./Navigation.module.css";

const Navigation = () => (
    <div className={s.container}>
        <Link to='/'>
            <div className={s.logo}></div>
        </Link>
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
                        Home
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
);

export default Navigation;