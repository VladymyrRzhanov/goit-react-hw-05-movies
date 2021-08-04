import s from "./ActorsDetails.module.css";

const ActorsDetails = ({ actors }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <ul className={s.gallery}>
            {actors.map(({ id, character, name, profile_path }) => (
                <li className={s.item} key={id}>
                    <div className={s.card}>
                        <img className={s.container} src={IMAGE_URL + profile_path} alt={name} />
                        <div>
                            <p className={s.name}>{name}</p>
                            <p className={s.character}>{character}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ActorsDetails;