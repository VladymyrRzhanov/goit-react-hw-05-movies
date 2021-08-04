import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActorsList from "../components/ActorsDetails";
import * as FilmsApi from "../service/apiFilmsService";

const ActorsPage = () => {
    const [actors, setActors] = useState(null);
    const [error, setError] = useState('');
    const { actorsId } = useParams();
    
    useEffect(() => {
        FilmsApi
            .fetchActorsMovie(actorsId)
            .then(({ cast }) => setActors(cast))
            .catch(error => setError(error))
    }, [actorsId]);

    return (
        <>
            {actors && <ActorsList actors={actors} />}
        </>
    );
};

export default ActorsPage;