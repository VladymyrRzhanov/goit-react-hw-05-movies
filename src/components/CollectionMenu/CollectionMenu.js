import React from 'react';
import { useDispatch } from "react-redux";
import * as authUserOperation from "../../redux/authUser/authUser-operation";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Container, MenuLink, IconOut, LogOutButton } from "./styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    MuiButton: {
        color: 'white',
        fontSize: '18px',
        lineHeight: '14px',
        letterSpacing: '0.4px',
    },
    dropMenu: {
        zIndex: 999
    }
}));

const CollectionMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Container>
            <div>
                <Button
                    className={classes.MuiButton}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    Collection
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.dropMenu}>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
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
                                        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                </div>
                <LogOutButton type='button' onClick={() => dispatch(authUserOperation.logoutUser())}><IconOut/></LogOutButton>
        </Container>
    );
};

export default CollectionMenu;