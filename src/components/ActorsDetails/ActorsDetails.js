import PropTypes from 'prop-types';
import s from "./ActorsDetails.module.css";
import oskar from '../../images/oskar.jpg'


const ActorsDetails = ({ actors, onModalOpen }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    if (actors.length === 0) {
        return <h2>Sorry, we haven't actors yet</h2>
    }
    return (
        <ul className={s.gallery}>
            {actors.map(({ id, character, name, profile_path }) => {
                const foto = profile_path === null ? oskar : `${IMAGE_URL}${profile_path}`;

                return (
                    <li className={s.item} key={id}>
                        <div className={s.card} onClick={() => onModalOpen(id)}>
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

ActorsDetails.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        character: PropTypes.string,
        name: PropTypes.string,
        profile_path: PropTypes.string,
    })),
    onModalOpen: PropTypes.func.isRequired,
};

export default ActorsDetails;