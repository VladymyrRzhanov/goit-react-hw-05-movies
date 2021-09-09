import PropTypes from 'prop-types';
// import s from "./ActorsDetails.module.css";
import oskar from '../../images/oskar.jpg'
import { Gallery, Item, Card, Container, Name, Character } from "./styles";


const ActorsDetails = ({ actors, onModalOpen }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    if (actors.length === 0) {
        return <h2>Sorry, we haven't actors yet</h2>
    }
    return (
        <Gallery>
            {actors.map(({ id, character, name, profile_path }) => {
                const foto = profile_path === null ? oskar : `${IMAGE_URL}${profile_path}`;

                return (
                    <Item key={id}>
                        <Card onClick={() => onModalOpen(id)}>
                            <Container src={foto} alt={name} />
                            <div>
                                <Name>{name}</Name>
                                <Character>{character}</Character>
                            </div>
                        </Card>
                    </Item>
                )
            })}
        </Gallery>
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