import { useDispatch } from "react-redux";
import * as authUserOperation from "../../redux/authUser/authUser-operation";
import CollectionMenu from "../CollectionMenu/CollectionMenu";
import { IconOut, Button } from "./styles";


const FilmsLibrary = () => {
    const dispatch = useDispatch();

    return (
        <>
            <CollectionMenu/>
            <Button type='button' onClick={() => dispatch(authUserOperation.logoutUser())}><IconOut/></Button>
        </>
    );
}

export default FilmsLibrary;