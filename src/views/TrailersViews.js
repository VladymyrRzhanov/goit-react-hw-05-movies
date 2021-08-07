import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TrailersList from "../components/TrailersList";
import * as FilmsApi from "../service/apiFilmsService";

const TrailersViews = () => {
    const [trailers, setTrailers] = useState([])
    const [error, setError] = useState('');
    const { slug } = useParams();
    const trailersId = slug.match(/[a-zA-Z0-9]+$/)[0];
    
    useEffect(() => {
        FilmsApi
            .fetchTrailerMovie(trailersId)
            .then(({results})=> setTrailers(results)
            )
            .catch(error => setError(error)
            )
    }, [trailersId])
    
    return (
        <>
            {error && <h1>{error.message}</h1>}
            {trailers && <TrailersList trailers={trailers} />}
        </>
    );
};

export default TrailersViews;