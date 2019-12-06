import React from 'react';
import './MovieForm.css';

const MovieForm = props => {
    return (
        <form className='form'>
            <input type="text" className='movieTitle' required placeholder='Enter movie title' autoComplete='off'
                   onChange={props.getTitle}/>
            <button type='submit' className='add' onClick={props.addToList}>Add</button>
        </form>
    );
};

export default MovieForm;