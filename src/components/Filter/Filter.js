import { useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Button, ButtonLabel } from "./styles";

const Filter = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleChange = ({ target: { value } }) => {
        setQuery(value);
    };

    const reset = () => {
        setQuery('');
    };

    const onSearch = () => {
        history.push({
            pathname: '/movies',
            search: `query=${query}`
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        onSearch()
        reset();
    }
    
    return (
        <Form
            onSubmit={handleSubmit}
        >
            <Button
                type='submit'
            >
                <ButtonLabel>
                    Search
                </ButtonLabel>
            </Button>
            <Input
                type='text'
                value={query}
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={handleChange}
            />
        </Form>
    );
};

export default Filter;