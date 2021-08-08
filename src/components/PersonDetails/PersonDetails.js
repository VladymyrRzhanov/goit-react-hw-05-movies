import PropTypes from 'prop-types';
import s from "./PersonDetails.module.css";

const PersonDetails = ({ person: { biography, birthday, name, place_of_birth, profile_path } }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className={s.data}>
            <div className={s.poster}>
                <img className={s.image} src={IMAGE_URL + profile_path} alt={name} />
            </div>
            <div className={s.details}>
                <h1 className={s.title}>{name}</h1>
                <ul className={s.list}>
                    <li className={s.item}>
                        <span className={s.meaning}>Birthday:</span>
                        <span className={s.value}>{birthday}</span>
                    </li>
                    <li className={s.item}>
                        <span className={s.meaning}>Place of birth:</span>
                        <span className={s.value}>{place_of_birth}</span>
                    </li>
                </ul>
                <div className={s.overview}>
                    <h3>Biography:</h3>
                    <p className={s.overviewText}>{biography}</p>
                </div>
            </div>
        </div>
    );
};

PersonDetails.propTypes = {
    person: PropTypes.shape({
        biography: PropTypes.string,
        birthday: PropTypes.string,
        name: PropTypes.string,
        place_of_birth: PropTypes.string,
        profile_path: PropTypes.string,
    }),
};

export default PersonDetails;