import s from "./ButtonToTop.module.css";
import PropTypes from 'prop-types'

const ButtonToTop = ({toTop}) => (
    <button
        className={s.button}
        type='button' 
        onClick={toTop}>
    </button>
);

ButtonToTop.propTypes = {
    toTop: PropTypes.func.isRequired,
}

export default ButtonToTop;