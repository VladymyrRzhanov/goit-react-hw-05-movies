import { useParams, useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActorsViews from "../views/ActorsViews";
import ReviewsViews from "../views/ReviewsViews";
import ImagesViews from "../views/ImagesViews";
import TrailersViews from "../views/TrailersViews";
import SimilarMoviesViews from "../views/SimilarMoviesViews";
import FilmDetails from "../components/FilmDetails";
import Modal from '../components/Modal';
import ModalTrailer from "../components/Modal/ModalTrailer";
import * as FilmsApi from '../service/apiFilmsService';

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
        </>
    );
};

export default MovieDetailsPage;