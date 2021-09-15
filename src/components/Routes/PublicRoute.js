import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getIsLoggeIn } from "../../redux/authUser/authUser-selector";

const PublicRoute = ({ children,
    restricted = false,
    redirectTo = '/',
    ...routeProps
}) => {
    const isLoggedIn = useSelector(getIsLoggeIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
};

export default PublicRoute;