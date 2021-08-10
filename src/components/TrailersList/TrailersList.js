import PropTypes from 'prop-types';
import s from "./Trailes.module.css";

const Trailers = ({ trailers }) => {
    if (trailers.length === 0) {
        return <h2>Sorry, we haven't trailers yet</h2>
    }
    return (
        <ul className={s.list}>
            {trailers.map(({ key }) =>
                <li className={s.item}
                    key={key}>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </li>
            )}
        </ul>
    );
};

Trailers.propTypes = {
    trailers:PropTypes.arrayOf(PropTypes.shape({
        key:PropTypes.string.isRequired,
    }),),
}

export default Trailers;