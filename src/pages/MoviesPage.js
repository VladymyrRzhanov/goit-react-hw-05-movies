import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import FilmDetails from "../components/FilmDetails";

import * as FilmsApi from '../service/apiFilmsService';

const MoviesPage = () => {
    const [film, setFilm] = useState(null)
    const [error, setError] = useState('')
    const { filmId } = useParams();

    useEffect(() => {
        FilmsApi.fetchDetailsMovie(filmId)
            .then(setFilm)
            .catch(error => setError(error))
    },[filmId]);
    
    return (
        <>
            {film && <FilmDetails film={film} />}
        </>
    );
};

export default MoviesPage;