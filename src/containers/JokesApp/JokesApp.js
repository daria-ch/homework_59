import React, {Component} from 'react';
import Joke from "../../components/Jokes/Joke/Joke";
import Button from '../../components/Jokes/Button/Button';

class JokesApp extends Component {

    state = {
        jokes: [],
    };

    componentDidMount() {
        let jokes = [...this.state.jokes];
        jokes = [];

        const urlArray = [];
        const url = 'https://api.chucknorris.io/jokes/random';
        for (let i = 0; i < 5; i++) {
            urlArray.push(url);
        }

        Promise.all(urlArray.map(url => fetch(url)))
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(result => {
                result.map(joke => {
                    const jokeText = joke.value;
                    const jokeId = joke.id;
                    jokes.push({text: jokeText, id: jokeId});
                    this.setState({jokes});
                    return jokes;
                });
            })
    }

    render() {
        const jokesStyle = {
            margin: '20px auto',
            padding: '20px',
            maxWidth: '1200px'
        };

        return (
            <div className='jokesApp' style={jokesStyle}>
                <Button
                    text='Get Jokes'
                    getJokes={() => this.componentDidMount()}
                />
                <div className='jokes'>
                    {this.state.jokes.map(joke => (
                        <Joke
                            key={joke.id}
                            text={joke.text}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default JokesApp;