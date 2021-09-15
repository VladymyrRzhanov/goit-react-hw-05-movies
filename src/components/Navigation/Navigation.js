import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filmsPageActions } from "../../redux/filmsPage/filmsPage-actions";
import { getIsLoggeIn } from "../../redux/authUser/authUser-selector";
import Filter from '../Filter';
import Auth from "../Auth";
import FilmsLibrary from "../FilmsLibrary";
import { Container, Nav, LogoMob, LogoBig,  } from "./styles";

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggeIn);
    const dispatch = useDispatch()

    return (
        <Container>
            <Link to='/' onClick={()=>dispatch(filmsPageActions(1))}>
                <LogoMob />
                <LogoBig />
            </Link>
            <Filter />
            <Nav>
                {isLoggedIn ? <FilmsLibrary /> : <Auth />}
            </Nav>
        </Container>
    );
}

export default Navigation;