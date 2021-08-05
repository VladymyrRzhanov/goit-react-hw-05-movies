import { useParams, Route, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActorsPage from "./ActorsPage";
import ReviewsPage from "./ReviewsPage";
import FilmDetails from "../components/FilmDetails";

import * as FilmsApi from '../service/apiFilmsService';

const MoviesPage = () => {
    const [film, setFilm] = useState(null);
    const [error, setError] = useState(null);
    const { filmId } = useParams();
    const { url } = useRouteMatch();

    useEffect(() => {
        FilmsApi
            .fetchDetailsMovie(filmId)
            .then(film => {
                if (film.success === false) {
                    return setError(film.status_message)
                }
                else { setFilm(film) }
            })
            .catch(error => setError(error))
    }, [filmId]);
    console.log(film)
    return (
        <>
            {film ? <FilmDetails film={film} /> : <h1>{error}</h1>}
            <Route path={`${url}/:actorsId`} exact>
                <ActorsPage />
            </Route>
            <Route path={`${url}/:reviewsId`}>
                <ReviewsPage />
            </Route>
        </>
    );
};

export default MoviesPage;