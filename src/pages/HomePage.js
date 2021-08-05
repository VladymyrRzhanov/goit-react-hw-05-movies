import * as FilmsApi from '../service/apiFilmsService';
import { useState, useEffect } from 'react';
import FilmsGallery from "../components/FilmsGallery";
import Button from "../components/Button";
import Loader from "../components/Loader";

const HomePage = () => {
    const [films, setFilms] = useState(
        // () =>
        //     JSON.parse(window.sessionStorage.getItem('films')) ??
            []);
    const [page, setPage] = useState(
    // () =>
    //         JSON.parse(window.sessionStorage.getItem('page')) ??
            1,
  );
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

    // useEffect(() => {
    //     window.sessionStorage.setItem('page', JSON.stringify(page));
    //     window.sessionStorage.setItem('films', JSON.stringify(films));
    // }, [page, films]);
    
    return (
        <>
            <FilmsGallery films={films} />
            {loading && <Loader />}
            {films.length % 20 === 0 && !!films.length && (<Button onLoadMore={() => setPage(state => state + 1)} />)}
        </>
    );
};

export default HomePage;