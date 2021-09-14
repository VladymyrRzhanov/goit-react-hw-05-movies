import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPage } from "../redux/filmsPage/filmsPage-selector";
import * as FilmsApi from "../service/apiFilmsService";
import FilmsGallery from "../components/FilmsGallery";
import Pagination from '../components/Pagination';

const MoviesPage = () => {
    const [totalPage, setTotalPage] = useState(null);
    const [searchFilms, setSearchFilms] = useState(null);
    const [error, setError] = useState(null)
    const location = useLocation();
    const page = useSelector(getPage);

    const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

    useEffect(() => {
        if (!searchQuery) {
            return
        }
        FilmsApi
            .fetchSearchMovie(searchQuery, page)
            .then(({ results, total_pages }) =>
            {
                setSearchFilms(results);
                setTotalPage(Number(total_pages));
            }
            )
            .catch(error => setError(error))
    }, [searchQuery, page]);
    
    return (
        <>
            {error && <h1>{error.message}</h1>}
            {searchFilms && <FilmsGallery films={searchFilms} />}
            {!!totalPage && <Pagination
                totalPage={totalPage}
            />
            }
        </>
    );
};

export default MoviesPage;