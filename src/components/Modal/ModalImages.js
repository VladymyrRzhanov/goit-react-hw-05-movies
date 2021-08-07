const ModalImage = ({modalValue, caption}) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    return (
    <img src={IMAGE_URL+modalValue} alt={caption} />
)}

export default ModalImage