import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActorsList from "../components/ActorsDetails";
import * as FilmsApi from "../service/apiFilmsService";

const ActorsPage = () => {
    const [actors, setActors] = useState(null);
    const [error, setError] = useState('');
    const { slug } = useParams();
    const actorsId = slug.match(/[a-zA-Z0-9]+$/)[0];
    
    useEffect(() => {
        FilmsApi
        .fetchActorsMovie(actorsId)
        .then(({ cast }) => setActors(cast))
        .catch(error => setError(error))
    }, [actorsId]);
    
    console.log(actors)
    return (
        <>
            {actors && <ActorsList actors={actors} />}
        </>
    );
};

export default ActorsPage;