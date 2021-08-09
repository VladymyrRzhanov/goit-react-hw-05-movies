import { lazy, Suspense } from 'react';
import { useParams, useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FilmDetails from "../components/FilmDetails";
import Modal from '../components/Modal';
import ModalTrailer from "../components/Modal/ModalTrailer";
import * as FilmsApi from '../service/apiFilmsService';
import Loader from "../components/Loader";

const ActorsViews = lazy(() => import('../views/ActorsViews' /* webpackChunkName: "actors-view" */));
const ReviewsViews = lazy(() => import('../views/ReviewsViews' /* webpackChunkName: "reviews-view" */));
const ImagesViews = lazy(() => import('../views/ImagesViews' /* webpackChunkName: "images-view" */));
const TrailersViews = lazy(() => import('../views/TrailersViews' /* webpackChunkName: "trailers-view" */));
const SimilarMoviesViews = lazy(() => import('../views/SimilarMoviesViews' /* webpackChunkName: "similar-view" */));


const MovieDetailsPage = () => {
    const [film, setFilm] = useState(null);
    const [error, setError] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [modalValue, setModalValue] = useState('');
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

    const toggleModal = (value) => {
        setModalShow(!modalShow);
        setModalValue(value);
    };
    
    return (
        <>
            {film ?
                <FilmDetails
                    film={film}
                    onModalOpen={toggleModal}
                />
                : <h1>{error}</h1>
            }

            {modalShow &&
                
                <Modal
                    onClose={toggleModal}
                >
                    <ModalTrailer
                        trailerId={modalValue}
                    />
                </Modal>
            }
           
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path={`${path}/cast`}>
                        <ActorsViews />
                    </Route>
            
                    <Route path={`${path}/reviews`}>
                        <ReviewsViews />
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
            </Suspense>
        </>
    );
};

export default MovieDetailsPage;