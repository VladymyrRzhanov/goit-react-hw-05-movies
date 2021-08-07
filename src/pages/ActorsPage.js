import { useParams,useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActorsDetails from "../components/ActorsDetails";
import * as FilmsApi from "../service/apiFilmsService";

const ActorsPage = () => {
    const [actors, setActors] = useState(null);
    const [error, setError] = useState('');
    const { cast } = useParams();
    const actorsId = cast.match(/[a-zA-Z0-9]+$/)[0];

    const location = useLocation();
    console.log(location)
    console.log()
    useEffect(() => {
        FilmsApi
        .fetchActorsMovie(actorsId)
        .then(({ cast }) => setActors(cast))
        .catch(error => setError(error))
    }, [actorsId]);
    
    console.log(actors)
    return (
        <>
            {actors && <ActorsDetails actors={actors} />}
        </>
    );
};

export default ActorsPage;