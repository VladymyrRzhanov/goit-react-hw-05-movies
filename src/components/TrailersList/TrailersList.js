import PropTypes from 'prop-types';
import { List, Item, VideoContainer } from "./styles";

const Trailers = ({ trailers }) => {
    if (trailers.length === 0) {
        return <h2>Sorry, we haven't trailers yet</h2>
    }
    return (
        <List>
            {trailers.map(({ key }) =>
                <Item
                    key={key}>
                    <VideoContainer width="560" height="315" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></VideoContainer>
                </Item>
            )}
        </List>
    );
};

Trailers.propTypes = {
    trailers:PropTypes.arrayOf(PropTypes.shape({
        key:PropTypes.string.isRequired,
    }),),
}

export default Trailers;