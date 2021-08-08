import { useState, useEffect } from 'react';
import * as FilmsApi from "../../service/apiFilmsService";
import PersonDetails from "../PersonDetails";
import PropTypes from 'prop-types';

const ModalPerson = ({ personId }) => {
    const [person, setPerson] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        FilmsApi
            .fetchPerson(personId)
            .then(setPerson)
            .catch(error => setError(error))
    }, [personId]);
    
    return (
        <>
            {person ? <PersonDetails person={person} /> : <h2>{error.message}</h2>}
        </>
    );
};

ModalPerson.propTypes = {
    personId: PropTypes.number.isRequired,
}

export default ModalPerson;