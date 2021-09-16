import { useDispatch } from "react-redux";
import * as authUserOperation from "../../redux/authUser/authUser-operation";
import { LibraryLink, IconOut, Button } from "./styles";


const FilmsLibrary = () => {
    const dispatch = useDispatch();

    return (
        <>
            <LibraryLink to='/library'>
                Library
            </LibraryLink>
            <Button type='button' onClick={() => dispatch(authUserOperation.logoutUser())}><IconOut/></Button>
        </>
    );
}

export default FilmsLibrary;