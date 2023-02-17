import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import Movies from './components/Movies'
import SearchBar from './components/SearchBar'
import movieData from './util/movies'

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [maxLength, setMaxLength] = useState(0);
  const [buttonName, setButtonName] = useState('asc');
  const [currentMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    const moviesClone = [...movieData];
    const filteredMovies = moviesClone.filter(movie =>{
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
       ( [NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) <= movie.length);
    })

    setMovies(filteredMovies);
  },[search,maxLength,buttonName, currentMovies]);

  return (
    <div className="App">
      <SearchBar search = {search} setSearch = {setSearch} maxLength = {maxLength} setMaxLength = {setMaxLength} buttonName = {buttonName} setButtonName = {setButtonName} currentMovies = {movieData} setSortedMovies = {setSortedMovies} />
      <Movies movies = {movies}/>
    </div>
  )
}

export default App
