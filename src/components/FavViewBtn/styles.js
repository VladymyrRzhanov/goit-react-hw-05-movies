import styled from 'styled-components';
import { ReactComponent as FavIcon } from "../../images/star.svg";
import { ReactComponent as EyeIcon } from "../../images/tv.svg";
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

export const FavoriteBtn = styled(FavIcon)`
    width: 25px;
    height: 25px;
    fill: transparent;
    stroke: rgb(255 129 0);
    stroke-width: 0.5ch;
`;

export const FavoriteBtnChecked = styled(FavIcon)`
    width: 25px;
    height: 25px;
    fill: rgb(255 129 0);
    stroke: rgb(255 129 0);
    stroke-width: 0.5ch;
`;

export const Viewed = styled(EyeIcon)`
    width: 25px;
    height: 25px;
    fill: transparent;
    stroke: rgb(255 129 0);
    stroke-width: 5ch;
`;

export const ViewedChecked = styled(EyeIcon)`
    width: 25px;
    height: 25px;
    fill: rgb(255 129 0);
    stroke: rgb(255 129 0);
    stroke-width: 5ch;
`;

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    bottom: 0;
    right: 0;
    padding: 5px 0;
`;