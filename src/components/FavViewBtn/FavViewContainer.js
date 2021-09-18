import PropTypes from 'prop-types'
import FavBtn from "./FavBtn";
import ViewedBtn from "./ViewedBtn";
import { Container } from "./styles";

const FavViewContainer = ({movieId }) => {

    return (
        <Container>
            <FavBtn movieId={movieId}/>
            <ViewedBtn movieId={movieId}/>
        </Container>
    );
}

FavViewContainer.propTypes = {
    movieId: PropTypes.number.isRequired,
}

export default FavViewContainer;