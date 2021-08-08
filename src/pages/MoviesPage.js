import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import Filter from "../components/Filter";
import * as FilmsApi from "../service/apiFilmsService";
import FilmsGallery from "../components/FilmsGallery";

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [searchFilms, setSearchFilms] = useState(null)
    const [error, setError] = useState(null)
    const history = useHistory();
    const location = useLocation();

    const handleChange = ({ target: { value } }) => {
        setQuery(value)
    };

    const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

    const onSearch = () => {
        history.push({
            ...location,
            search: `query=${query}`
        });
    };

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
            <Filter handleChange={handleChange} onSearch={onSearch} />
            {searchFilms && <FilmsGallery films={searchFilms} />}
        </>
    )
};

export default MoviesPage;