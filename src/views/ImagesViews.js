import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImagesList from "../components/ImagesList";
import Modal from "../components/Modal";
import ModalImages from "../components/Modal/ModalImages";
import * as FilmsApi from "../service/apiFilmsService";

const ImagesViews = () => {
    const [images, setImages] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalValue, setModalValue] = useState('');
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
        setModalValue(value);
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
                    <ModalImages modalValue={modalValue}/>
                    </Modal>
            )}
        </>
    );
};

export default ImagesViews;