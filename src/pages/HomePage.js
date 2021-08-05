import * as FilmsApi from '../service/apiFilmsService';
import { useState, useEffect } from 'react';
import FilmsGallery from "../components/FilmsGallery";
import Button from "../components/Button";
import Loader from "../components/Loader";

const HomePage = () => {
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
        
    useEffect(() => {
        setLoading(true)
        FilmsApi.fetchTrendingMovies(page)
            .then(({ results }) => 
                setFilms(prevState => [...prevState, ...results])
            )
            .catch(error => setError(error))
          .finally(() => setLoading(false)); 
    }, [page]);

    return (
        <>
            <FilmsGallery films={films} />
            {loading && <Loader />}
            {films.length % 20 === 0 && !!films.length && (<Button onLoadMore={() => setPage(state => state + 1)} />)}
        </>
    );
};

export default HomePage;