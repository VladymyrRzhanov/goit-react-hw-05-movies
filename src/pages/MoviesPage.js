import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import * as FilmsApi from "../service/apiFilmsService";
import FilmsGallery from "../components/FilmsGallery";

const MoviesPage = () => {
    const [searchFilms, setSearchFilms] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

    useEffect(() => {
        if (!searchQuery) {
            return
        }
        FilmsApi
            .fetchSearchMovie(searchQuery)
            .then(({ results }) =>
                setSearchFilms(results)
            )
            .catch(error => setError(error))
    }, [searchQuery]);
    
    return (
        <>
            {error && <h1>{error.message}</h1>}
            {searchFilms && <FilmsGallery films={searchFilms} />}
        </>
    )
};

export default MoviesPage;