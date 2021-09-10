import { Link } from 'react-router-dom';
import { Container, Nav, LogoMob, LogoBig, List, Item, MenuLink } from "./styles";

const Navigation = () => (
    <Container>
        <Link to='/'>
            <LogoMob />
            <LogoBig/>
        </Link>
        <Nav>
            <List>
                <Item>
                    <MenuLink to="/" exact>
                        Home
                    </MenuLink>
                </Item>
                <Item>
                    <MenuLink to="/movies">
                        Movies
                    </MenuLink>
                </Item>
            </List>
        </Nav>
    </Container>
);

export default Navigation;