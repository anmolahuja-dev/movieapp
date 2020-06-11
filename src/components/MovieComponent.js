import React, {Component} from 'react';
import SearchMovie from './MovieSearchComponent'

class Movie extends Component {
    render() {
        return(
            <div className="container">
                <h1 className="title">Movie Buzz</h1>
                <SearchMovie />
            </div>
        );
    }
}
export default Movie;