import s from "./FilmDetails.module.css";

const FilmDetails = ({ film }) => {

    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const { poster_path, title, release_date, production_countries, vote_average, budget, genres, overview, revenue, runtime, tagline } = film;
    const genresFilm = genres.map(genre => genre.name).join(', ');

    return (
        <div className={s.card}>
            <div className={s.data}>
                <img className={s.poster} src={IMAGE_URL + poster_path} alt={title} />
                <div className={s.details}>
                    <h1 className={s.title}>{title}({release_date.slice(0, 4)})</h1>
                    <h2 className={s.tagline}>{tagline}</h2>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <span className={s.meaning}>Date:</span>
                            <span className={s.value}>{release_date}</span>
                        </li>
                        <li className={s.item}>
                            <span className={s.meaning}>Genres:</span>
                            <span className={s.value}>{genresFilm}</span>
                        </li>
                        <li className={s.item}>
                            <span className={s.meaning}>Runtime:</span>
                            <span className={s.value}>{runtime}min</span>
                        </li>
                        <li className={s.item}>
                            <span className={s.meaning}>Country:</span>
                            <span className={s.value}>{production_countries[0].name}</span>
                        </li>
                        <li className={s.item}>
                            <span className={s.meaning}>Budget:</span>
                            <span className={s.value}>{budget}$</span>
                        </li>
                        <li className={s.item}>
                            <span className={s.meaning}>Revenue:</span>
                            <span className={s.value}>{revenue}$</span>
                        </li>
                        <li className={s.item}>
                            <span className={s.meaning}>Rating IMDB:</span>
                            <span className={s.value}>{vote_average}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.overview}>
                <h3>Overview:</h3>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default FilmDetails;
