import s from "./Filter.module.css";
import PropTypes from 'prop-types';

const Filter = ({ handleChange, onSearch }) => {
    const handleSubmit = e => {
        e.preventDefault()
        onSearch()
    }
    
    return (
        <form
            className={s.form}
            onSubmit={handleSubmit}>
            
            <input
                className={s.input}
                type="text"
                autoComplete="on"
                autoFocus
                placeholder="Enter the movie"
                onChange={handleChange} />
            <button
                className={s.button}
                type='submit'>
                Search
            </button>
    </form>
    )
}

Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default Filter;