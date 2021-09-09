import PropTypes from 'prop-types';
import { Form, Input, Button } from "./styles";

const Filter = ({ handleChange, onSearch }) => {
    const handleSubmit = e => {
        e.preventDefault()
        onSearch()
    }
    
    return (
        <Form
            onSubmit={handleSubmit}>
            
            <Input
                type="text"
                autoComplete="on"
                autoFocus
                placeholder="Enter the movie"
                onChange={handleChange} />
            <Button
                type='submit'>
                Search
            </Button>
    </Form>
    )
}

Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default Filter;