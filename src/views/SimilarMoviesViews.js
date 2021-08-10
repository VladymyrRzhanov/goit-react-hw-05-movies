import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FilmsGallery from "../components/FilmsGallery";
import * as FilmsApi from "../service/apiFilmsService";

const SimilarMoviesViews = () => {
    const [similar, setSimilar] = useState(null);
    const { slug } = useParams();;
    const similarId = slug.match(/[a-zA-Z0-9]+$/)[0];
    
    useEffect(() => {
        FilmsApi.fetchSimilarMovies(similarId).then(
            ({ results }) => setSimilar(results)
        )
    }, [similarId]);
    
    return (
        <>
            
            {similar && <FilmsGallery films={similar}/>}
        </>
    );
};

export default SimilarMoviesViews;