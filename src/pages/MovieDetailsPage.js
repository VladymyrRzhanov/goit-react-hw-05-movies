import { useParams, Route, useRouteMatch, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActorsPage from "./ActorsPage";
import ReviewsPage from "./ReviewsPage";
import FilmDetails from "../components/FilmDetails";

import * as FilmsApi from '../service/apiFilmsService';

const MoviesPage = () => {
    const [film, setFilm] = useState(null);
    const [error, setError] = useState(null);
    const { slug } = useParams();
    const { url } = useRouteMatch();
    const filmId = slug.match(/[a-zA-Z0-9]+$/)[0];
    
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
           
            <Switch>

                {/* <Route exact path={`${url}/:cast`} component={ActorsPage}>
                    <ActorsPage />
                </Route> */}
            
                <Route exact path={`${url}/:review`} component={ReviewsPage}>
                    <ReviewsPage />
                </Route>


            </Switch>
        </>
    );
};

export default MoviesPage;