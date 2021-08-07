import { useParams, useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActorsPage from "../views/ActorsViews";
import ReviewsPage from "../views/ReviewsViews";
import ImagesViews from "../views/ImagesViews";
import TrailersViews from "../views/TrailersViews";
import SimilarMoviesViews from "../views/SimilarMoviesViews";
import FilmDetails from "../components/FilmDetails";
import * as FilmsApi from '../service/apiFilmsService';

const MovieDetailsPage = () => {
    const [film, setFilm] = useState(null);
    const [error, setError] = useState(null);
    const { slug } = useParams();
    const { path } = useRouteMatch();
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

    return (
        <>
            {film ?
                <FilmDetails
                    film={film}
                /> :
                <h1>{error}</h1>}
           
            <Switch>
                    
                <Route path={`${path}/cast`}>
                    <ActorsPage />
                </Route>
            
                <Route path={`${path}/reviews`}>
                    <ReviewsPage />
                </Route>

                <Route path={`${path}/images`}>
                    <ImagesViews />
                </Route>

                <Route path={`${path}/trailers`}>
                    <TrailersViews />
                </Route>

                <Route path={`${path}/similar`}>
                    <SimilarMoviesViews />
                </Route>
                    
            </Switch>
        </>
    );
};

export default MovieDetailsPage;