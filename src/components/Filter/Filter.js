import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Button, BtnLabel } from "./styles";

const Filter = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();
    
    const handleInputChange = ({ target: { value } }) => {
        setQuery(value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        history.push({ pathname: '/movies', search: `query=${query}` });
        reset();
    
    };

    const reset = () => {
        setQuery('');
    };
    
    return (
        <Form
            onSubmit={handleSubmit}
        >
            <Button
                type='submit'
            >
                <BtnLabel>
                    Search
                </BtnLabel>
            </Button>
            <Input
                name="name"
                value={query}
                type='text'
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={handleInputChange}
            />
        </Form>
    );
};

export default Filter;