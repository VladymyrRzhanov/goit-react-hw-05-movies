import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImagesList from "../components/ImagesList";
import Modal from "../components/Modal";
import * as FilmsApi from "../service/apiFilmsService";
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';

const ImagesViews = () => {
    const [images, setImages] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [index, setIndex] = useState(null)
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
    
    const toggleModal = (value,index) => {
        setModalShow(!modalShow);
        setIndex(index)
    };
    
    return (
        <>
            {error && <h1>{error.message}</h1>}
            {images && <ImagesList images={images} onModalOpen={toggleModal}/>}
            {modalShow &&
                (
                <Modal
                    onClose={toggleModal} index={index}
                >
                    <ImageCarousel images={images} currentIndex={index}/>
                    </Modal>
            )}
        </>
    );
};

export default ImagesViews;