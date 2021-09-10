import PropTypes from 'prop-types';
import { Data, Poster, Title, Image, Details, List, Item, Meaning, Value, OverviewText } from "./styles";

const PersonDetails = ({ person: { biography, birthday, name, place_of_birth, profile_path } }) => {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <Data>
            <Poster>
                <Image src={IMAGE_URL + profile_path} alt={name} />
            </Poster>
            <Details>
                <Title>{name}</Title>
                <List>
                    <Item>
                        <Meaning>Birthday:</Meaning>
                        <Value>{birthday}</Value>
                    </Item>
                    <Item>
                        <Meaning>Place of birth:</Meaning>
                        <Value>{place_of_birth}</Value>
                    </Item>
                </List>
                <div>
                    <h3>Biography:</h3>
                    <OverviewText>{biography}</OverviewText>
                </div>
            </Details>
        </Data>
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