import React, {useState} from 'react';
import MovieCard from './MovieCardComponent';

function SearchMovie (){

    //states - input query, movies

    const [query, setQuery]= useState(''); //This means that we want query to have an initial state of empty string and the setQuery is a function that will be used to change that state
    const [movies, setMovies]= useState([]); //array of movies

    const searchMoives = async (e) =>{
        e.preventDefault();
        const url=`https://api.themoviedb.org/3/search/movie?api_key=b2efe714f90521bcc779011209f77755&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
        const res= await fetch(url);
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);

        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <>
        <div>
            <form className="form" onSubmit={searchMoives}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={ (event) => setQuery(event.target.value)} /> 
            <button className="button" type="submit">Search</button>
        </form>
        </div> {/*Here we are setting the value to be equal to the qery we enter onchange is imp. event is the default param of onChange target is input element and value is the query we enter*/}
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie= {movie} />
            ))}
        </div>
        </>
    );
}
export default SearchMovie;