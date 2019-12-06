import React from 'react';
import './Joke.css';

const Joke = props => {
    return (
        <p className='joke'>
            {props.text}
        </p>
    );
};

export default Joke;