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
                    <li className={s.item}>
                        <span className={s.meaning}>Biography:</span>
                        <span className={s.value}>{biography}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PersonDetails;