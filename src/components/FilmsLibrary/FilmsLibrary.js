import { useDispatch } from "react-redux";
import * as authUserOperation from "../../redux/authUser/authUser-operation";
import { LibraryLink, Logout } from "./styles";


const FilmsLibrary = () => {
    const dispatch = useDispatch();

    return (
        <>
            <LibraryLink to='/library'>
                Library
            </LibraryLink>
            <Logout type='button' onClick={() => dispatch(authUserOperation.logoutUser())}></Logout>
        </>
    );
}

export default FilmsLibrary;