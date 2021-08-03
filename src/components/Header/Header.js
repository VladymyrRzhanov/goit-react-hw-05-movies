import Container from "../Container";
import s from "./Header.module.css";

import Navigation from "../Navigation";

const Header = () => (
    <header className={s.header}>
        <Container>
            <Navigation />
        </Container>
    </header>
);

export default Header;