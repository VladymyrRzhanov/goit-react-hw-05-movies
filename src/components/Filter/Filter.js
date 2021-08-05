import s from "./Filter.module.css";

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
)}

export default Filter;