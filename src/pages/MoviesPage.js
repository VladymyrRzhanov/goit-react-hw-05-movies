import { useState } from 'react';
import Filter from "../components/Filter";
import * as FilmsApi from "../service/apiFilmsService";
import FilmsGallery from "../components/FilmsGallery";

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [searchFilms, setSearchFilms] = useState(null)
    const [error, setError] = useState(null)

    const handleChange = ({ target: { value } }) => {
        setQuery(value)
    }

    const onSearch = () => {
        FilmsApi
            .fetchSearchMovie(query)
            .then(({results})=>
                setSearchFilms(results)
            )
            .catch(error => setError(error))
    }
    
    return (
        <>
            <Filter handleChange={handleChange} onSearch={onSearch} />
            {searchFilms && <FilmsGallery films={searchFilms}/>}
            </>
    )
};

export default MoviesPage;