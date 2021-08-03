import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import FilmDetails from "../components/FilmDetails";

import * as FilmsApi from '../service/apiFilmsService';

const MoviesPage = () => {
    const [film, setFilm] = useState({})
    const { filmId } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            await FilmsApi.fetchDetailsMovie(filmId)
            .then(setFilm)
            
        //     .catch(error => setError(error))
        }
        fetchMovie()
    },[filmId]);
    
    return (
        <>
            {film && <FilmDetails film={film} />}
        </>
    );
};

export default MoviesPage;