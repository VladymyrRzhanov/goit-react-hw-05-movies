import PropTypes from 'prop-types';
import { Gallery, Item, Content, Author } from "./styles";

const ReviewsDetails = ({ reviews }) => {
    if (reviews.length === 0) {
        return <h2>Sorry, we haven't reviews yet</h2>
    }
    
    return (
        <Gallery>
            {reviews.map(({ id, author, content }) => (
                <Item key={id}>
                    <div>
                        <Content>{content}</Content>
                    </div>
                    <Author>Author: {author}</Author>
                </Item>
            ))}
        </Gallery>
    );
};

ReviewsDetails.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string,
        content: PropTypes.string,
    })),
};

export default ReviewsDetails;