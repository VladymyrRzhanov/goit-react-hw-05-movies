import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getIsLoggeIn } from "../../redux/authUser/authUser-selector";

const PrivateRoute = ({ children,
    redirectTo = '/',
    ...routeProps
}) => {
    const isLoggedIn = useSelector(getIsLoggeIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
};

export default PrivateRoute;