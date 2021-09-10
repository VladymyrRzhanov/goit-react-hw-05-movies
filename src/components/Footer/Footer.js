import Container from "../Container";
import Batman from "../../images/batman.png";
import { CustomFooter, Copyright, Link, Name } from "./styles";

const Footer = () => {
    const today = new Date(),
        year = today.getFullYear()
    return (
        <CustomFooter>
            <Container>
                <Copyright>
                    &#169; {year} | All Rights Reserved | Developed by
                    <Link
                        href='https://github.com/VladymyrRzhanov/goit-react-hw-05-movies'
                        target="_blank"
                        rel="noreferrer"
                    >
                        {/* <Name> */}
                             Vladymyr Rzhanov
                        {/* </Name> */}
                    </Link>
                </Copyright>
            </Container>
        </CustomFooter>
    );
};

export default Footer;