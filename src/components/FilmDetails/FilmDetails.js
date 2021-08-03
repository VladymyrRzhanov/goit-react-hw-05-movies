const FilmDetails = ({ film:{poster_path,title} }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    console.log(IMAGE_URL + poster_path)
    return (
        <div>
            <img src={IMAGE_URL + poster_path} alt={title}/>
        </div>

    )
};

export default FilmDetails;