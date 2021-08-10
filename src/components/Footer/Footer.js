import s from './Footer.module.css';
import Container from "../Container";
import Batman from "../../images/batman.png";

const Footer = () => {
    const today = new Date(),
        year = today.getFullYear()
    return (
        <footer className={s.footer}>
            <Container>
                <p className={s.copyright}>&#169; {year} | All Rights Reserved | Developed by <a className={s.link} href='https://github.com/VladymyrRzhanov/goit-react-hw-05-movies' target="_blank" rel="noreferrer"><img className={s.profile} src={Batman} alt='batman' /><span className={s.name}>Vladymyr Rzhanov</span></a></p>
            </Container>
        </footer>
    )
};

export default Footer;