import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input onChange={handleChange} value={searchValue} type="search" className='text-input' placeholder='Type your search' />
    );
}