import s from "./ActorsDetails.module.css";
import oskar from '../../images/oskar.jpg'


const ActorsDetails = ({ actors }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    
    return (
        <ul className={s.gallery}>
            {actors.map(({ id, character, name, profile_path }) => {
                const foto = profile_path === null ? oskar : `${IMAGE_URL}${profile_path}`;

                return (
                    <li className={s.item} key={id}>
                        <div className={s.card}>
                            <img className={s.container} src={foto} alt={name} />
                            <div>
                                <p className={s.name}>{name}</p>
                                <p className={s.character}>{character}</p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default ActorsDetails;