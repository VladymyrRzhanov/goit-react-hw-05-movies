import { useState, useEffect } from 'react';
import * as FilmsApi from "../../service/apiFilmsService";
import PropTypes from 'prop-types';

const ModalTrailer = ({ trailerId }) => {
    const [trailers, setTrailers] = useState([])
    const [movieTrailer, setMovieTrailer] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        FilmsApi
            .fetchTrailerMovie(trailerId)
            .then(({ results }) => setTrailers(results)
            )
            .catch(error => setError(error)
            )
    }, [trailerId])

    useEffect(() => {
        setMovieTrailer(trailers.find(({ name }) => name.toLowerCase().includes('official')))
    }, [trailers])
    
    return (
        <>
            {movieTrailer ?
                (
                    <iframe
                        width="1120"
                        height="630"
                        src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    
                    </iframe>
                ) :
                <h1>{error.message}</h1>}
        </>
    );
};

ModalTrailer.propTypes = {
    trailerId: PropTypes.number.isRequired,
}


export default ModalTrailer;