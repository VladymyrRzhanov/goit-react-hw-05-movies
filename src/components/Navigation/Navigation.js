import { Link } from 'react-router-dom';
import { Container, Nav, Logo, List, Item, MenuLink } from "./styles";

const Navigation = () => (
    <Container>
        {/* <Link to='/'>
            <Logo/>
        </Link> */}
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