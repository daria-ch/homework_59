import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.title !== nextProps.title
    }

    render() {
        return (
            <div className='movie'>
                <input className='list' type="text" value={this.props.title} onChange={this.props.change}/>
                <button className='delete' onClick={this.props.remove}>X</button>
            </div>
        );
    }
}

export default Movie;