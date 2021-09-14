import * as FilmsApi from '../service/apiFilmsService';
import { useState, useEffect } from 'react';
import FilmsGallery from "../components/FilmsGallery";
// import ButtonToTop from "../components/ButtonToTop";
import Loader from "../components/Loader";
import PagePagination from "../components/Pagination";

const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [top, setTop] = useState(false);

    const pageSwitch = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        setLoading(true)
        FilmsApi.fetchTrendingMovies(page)
            .then(({ results }) =>
                setFilms(prevState => [...results])
            )
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [page]);

    useEffect(() => {
        if (page === 1) {
            return
        }
        // setTop(true)
    }, [page]);
    
    // const toTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // };
    
    return (
        <>
            <FilmsGallery films={films} />
            {error && <h1>{error.message}</h1>}
            {loading && <Loader />}
            {films.length % 20 === 0 && !!films.length &&
                <PagePagination
                    pageSwitch={pageSwitch}
                />
            }
            {/* {top && <ButtonToTop toTop={toTop} />} */}
        </>
    );
};

export default HomePage;