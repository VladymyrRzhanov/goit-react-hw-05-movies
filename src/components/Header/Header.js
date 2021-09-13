import Container from "../Container";
import { CustomHeader } from "./styles";
import Navigation from "../Navigation";

const Header = () => {
    return (
        <CustomHeader>
            <Container>
                <Navigation
                />
            </Container>
        </CustomHeader>
    );
}

export default Header;