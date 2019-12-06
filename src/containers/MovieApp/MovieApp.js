import React, {Component} from 'react';
import nanoid from 'nanoid';
import MovieForm from '../../components/Movie/MovieForm/MovieForm';
import Movie from "../../components/Movie/Movie/Movie.";

class MovieApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newMovie: {title: '', id: ''},
            movies: this.getStorageMovie(),
        };
    }

    getMovieTitle = event => {
        this.setState({newMovie: {title: event.target.value, id: nanoid()}});
    };

    addMovie = event => {
        event.preventDefault();

        const newMovie = {...this.state.newMovie};
        const movies = [...this.state.movies];
        movies.push(newMovie);
        this.setState({movies});

        let moviesStorage = [];
        moviesStorage = JSON.parse(localStorage.getItem('movies'));
        moviesStorage.push(newMovie);
        localStorage.setItem('movies', JSON.stringify(moviesStorage));
    };

    changeTitle = (event, id) => {
        const index = this.state.movies.findIndex(p => p.id === id);
        const movies = [...this.state.movies];
        const movie = {...this.state.movies[index]};
        movie.title = event.target.value;
        movies[index] = movie;
        this.setState({movies});
    };

    removeMovie = id => {
        const index = this.state.movies.findIndex(p => p.id === id);
        const movies = [...this.state.movies];
        movies.splice(index, 1);
        this.setState({movies});

        let moviesStorage = [];
        moviesStorage = JSON.parse(localStorage.getItem('movies'));
        moviesStorage.splice(index, 1);
        localStorage.setItem('movies', JSON.stringify(moviesStorage));
    };

    getStorageMovie = () => {
        if (!localStorage.getItem('movies')) {
            localStorage.setItem('movies', JSON.stringify([]));
            return [];
        } else {
            return JSON.parse(localStorage.getItem('movies'));
        }
    };

    render() {
        const movieStyle = {
            border: '1px solid #000',
            maxWidth: "700px",
            margin: "20px auto",
            padding: '20px',
            height: '400px'
        };

        const textStyle = {
            textAlign: 'left',
            margin: '20px 0'
        };

        const movies = this.state.movies.map(movie => {
            return <Movie
                key={movie.id}
                title={movie.title}
                change={event => this.changeTitle(event, movie.id)}
                remove={() => this.removeMovie(movie.id)}
            />
        });

        return (
            <div className='MovieApp' style={movieStyle}>
                <MovieForm
                    getTitle={this.getMovieTitle}
                    addToList={this.addMovie}
                />
                <div>
                    <p style={textStyle}>To watch list:</p>
                    {movies}
                </div>
            </div>
        );
    }
}

export default MovieApp;