import React from 'react';
import { useDispatch } from 'react-redux';
import * as authUserOperation from "../../redux/authUser/authUser-operation";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, MenuLink } from "./styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    MuiButton: {
        color: 'white',
    },
    dropMenu: {
        zIndex: 999
    }
}));

const ITEM_HEIGHT = 48;

const UserMenuMob = () => {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <IconButton
                className={classes.MuiButton}
              
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={handleClose}>
                    <MenuLink to='/favourites'>
                        Favourite
                    </MenuLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <MenuLink to='/viewed'>
                        Viewed
                    </MenuLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Button
                        type='button'
                        onClick={() => dispatch(authUserOperation.logoutUser())}
                    >
                        Log out
                    </Button>
                </MenuItem>
            </Menu>
        </Container>
    );
};

export default UserMenuMob;