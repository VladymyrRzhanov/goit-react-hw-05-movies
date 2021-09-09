import PropTypes from 'prop-types'
import { Button, ArrowToTop } from "./styles";

const ButtonToTop = ({toTop}) => (
    <Button
        type='button' 
        onClick={toTop}>
        <ArrowToTop/>
    </Button>
);

ButtonToTop.propTypes = {
    toTop: PropTypes.func.isRequired,
}

export default ButtonToTop;