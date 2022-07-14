import React from 'react';
import '../Styles/Search.css'
const Search = ({ handleSearch }) => {
    return (
        <div>
            <input
                className='searchBar'
                type='text'
                placeholder='Enter name, mail or role'
                onChange={(event) => handleSearch(event)}
            />
        </div>
    )
}

export default Search