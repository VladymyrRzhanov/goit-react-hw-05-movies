import * as FilmsApi from '../service/apiFilmsService';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FilmsGallery from "../components/FilmsGallery";
import { getPage } from "../redux/filmsPage/filmsPage-selector";
import Loader from "../components/Loader";
import PagePagination from "../components/Pagination";

const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [totalPage, setTotalPage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const page = useSelector(getPage);

    useEffect(() => {
        setLoading(true)
        FilmsApi.fetchTrendingMovies(page)
            .then(({ results, total_pages }) => {
                setFilms([...results]);
                setTotalPage(Number(total_pages))
            }
            )
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [page]);

    useEffect(() => {
        if (page === 1) {
            return
        }
    }, [page]);

    return (
        <>
            <FilmsGallery films={films} />
            {error && <h1>{error.message}</h1>}
            {loading && <Loader />}
            {films.length % 20 === 0 && !!films.length &&
                <PagePagination
                    totalPage={totalPage}
                />
            }
        </>
    );
};

export default HomePage;