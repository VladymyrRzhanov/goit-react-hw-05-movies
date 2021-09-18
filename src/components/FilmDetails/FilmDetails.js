import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggeIn } from "../../redux/authUser/authUser-selector";
import FavViewContainer from "../FavViewBtn";
import PropTypes from 'prop-types';
import Button from "../Button";
import oskar from '../../images/oskar.jpg'
import s from "./FilmDetails.module.css";
import { Data, PosterContainer,Poster, Title, Tagline, Details, List, Item, Meaning, Value, OverviewTitle, OverviewText, Info, InfoItem, LinkInfo, ButtonContainer, PosterImg, BtnPlay } from "./styles";

const FilmDetails = ({ film, onModalOpen }) => {
    const isLoggeIn = useSelector(getIsLoggeIn);
    const { url } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const { id, poster_path, title, release_date, production_countries, vote_average, budget, genres, overview, revenue, runtime, tagline } = film;
    const genresFilm = genres.map(genre => genre.name).join(', ');
    const country = production_countries.map(({ name }) => name).join(', ');
    const poster = poster_path === null ? oskar : `${IMAGE_URL}${poster_path}`;

    const onGoBack = () => {
        history.push(location?.state?.from ?? '/')
    };

    return (
        <>
            <ButtonContainer>
                <Button text={'Go back'} type={'button'} onLoadMore={onGoBack} />
            </ButtonContainer>
                <Data>
                <PosterContainer>
                     <Poster onClick={() => onModalOpen(id)}>
                        <PosterImg src={poster} alt={title} />
                        <BtnPlay />
                </Poster>
                {isLoggeIn && (
                    <FavViewContainer movieId={film.id} id={film.id}/>
                )}
                       </PosterContainer>
                    <Details>
                        <Title>{title}({release_date.slice(0, 4)})</Title>
                        <Tagline>{tagline}</Tagline>
                        <List>
                            <Item>
                                <Meaning>Date:</Meaning>
                                <Value>{release_date}</Value>
                            </Item>
                            <Item>
                                <Meaning>Genres:</Meaning>
                                <Value>{genresFilm}</Value>
                            </Item>
                            <Item>
                                <Meaning>Runtime:</Meaning>
                                <Value>{runtime}min</Value>
                            </Item>
                            <Item>
                                <Meaning>Country:</Meaning>
                                <Value>{country}</Value>
                            </Item>
                            <Item>
                                <Meaning>Budget:</Meaning>
                                <Value>{budget}$</Value>
                            </Item>
                            <Item>
                                <Meaning>Revenue:</Meaning>
                                <Value>{revenue}$</Value>
                            </Item>
                            <Item>
                                <Meaning>Rating IMDB:</Meaning>
                                <Value>{vote_average}</Value>
                            </Item>
                            
                        </List>
                <div className={s.overview}>
                    <OverviewTitle>Overview:</OverviewTitle>
                    <OverviewText>{overview}</OverviewText>
                </div>
                    </Details>
                </Data>
                <Info>
                    <InfoItem>
                        <LinkInfo
                            exact
                            to={{
                                pathname: `${url}/cast`,
                                state: { ...location.state }
                            }}
                        >
                            Actors
                        </LinkInfo>
                    </InfoItem>

                    <InfoItem>
                        <LinkInfo
                            exact
                            to={{
                                pathname: `${url}/reviews`,
                                state: { ...location.state }
                            }}
                        >
                            Reviews
                        </LinkInfo>
                    </InfoItem>

                    <InfoItem>
                        <LinkInfo
                            exact
                            to={{
                                pathname: `${url}/images`,
                                state: { ...location.state }
                            }}
                        >
                            Images
                        </LinkInfo>
                    </InfoItem>

                    <InfoItem>
                        <LinkInfo
                            exact
                            to={{
                                pathname: `${url}/trailers`,
                                state: { ...location.state }
                            }}
                        >
                            Trailers
                        </LinkInfo>
                    </InfoItem>

                    <InfoItem>
                        <LinkInfo
                            exact
                            to={{
                                pathname: `${url}/similar`,
                                state: { ...location.state }
                            }}
                        >
                            Similar
                        </LinkInfo>
                    </InfoItem>
                </Info>
        </>
    );
};

FilmDetails.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        production_countries: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
        }),),
        vote_average: PropTypes.number,
        budget: PropTypes.number,
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
        })),
        overview: PropTypes.string,
        revenue: PropTypes.number,
        runtime: PropTypes.number,
        tagline: PropTypes.string,
    }).isRequired,
    onModalOpen: PropTypes.func.isRequired,
};

export default FilmDetails;
