import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.text !== nextProps.text || this.props.getJokes !== nextProps.getJokes
    }

    render() {
        return (
            <button className='joke-button' onClick={this.props.getJokes}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;