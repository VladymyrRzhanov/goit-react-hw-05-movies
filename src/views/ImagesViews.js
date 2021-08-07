import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImagesList from "../components/ImagesList";
import * as FilmsApi from "../service/apiFilmsService";

const ImagesViews = () => {
    const [images, setImages] = useState([])
    const [error, setError] = useState('');
    const { slug } = useParams();
    const imagesId = slug.match(/[a-zA-Z0-9]+$/)[0];
    
    useEffect(() => {
        FilmsApi
            .fetchImagesMovie(imagesId)
            .then(({backdrops})=> setImages(backdrops) 
            )
            .catch(error => setError(error)
            )
    }, [imagesId])
    
    return (
        <>
            {error && <h1>{error.message}</h1>}
            {images && <ImagesList images={images} />}
        </>
    );
};

export default ImagesViews;