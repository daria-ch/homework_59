import React from 'react';
import './App.css';
import MovieApp from "./containers/MovieApp/MovieApp";
import JokesApp from "./containers/JokesApp/JokesApp";

function App() {
    return (
        <div className="App">
            <MovieApp/>
            <JokesApp/>
        </div>
    );
}

export default App;
