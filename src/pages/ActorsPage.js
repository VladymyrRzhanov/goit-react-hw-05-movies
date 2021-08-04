import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActorsDetails from "../components/ActorsDetails";
import * as FilmsApi from "../service/apiFilmsService";

const ActorsPage = () => {
    const { actorsId } = useParams();
    const [actors, setActors] = useState(null);
console.log(actors)
    useEffect(() => {
        FilmsApi.fetchActorsMovie(actorsId).then(({ cast }) => setActors(cast))
    }, [actorsId]);

    return (
        <>
            {actors && <ActorsDetails actors={actors} />}
        </>
    );
};

export default ActorsPage;