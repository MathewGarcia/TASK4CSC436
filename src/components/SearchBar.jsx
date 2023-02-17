import { useEffect, useState } from "react";


const SearchBar = ({search, setSearch, maxLength,setMaxLength, buttonName, setButtonName, currentMovies, setSortedMovies}) =>{
    const searchHandler = (e) =>{
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const updateHandler = () => {
        if(buttonName === 'asc'){
            currentMovies.sort((a,b) => b.length - a.length);
            setSortedMovies(currentMovies);
            setButtonName('desc');
        }
        else {
            currentMovies.sort((a,b) => a.length - b.length);
            setButtonName('asc');
        }
    }
    return <>
        <label htmlFor = "search"> Search Query</label>
        <input type="text" name = "search" onChange = {searchHandler} vale= {search}/>
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name = "max-length" onChange = {maxLengthHandler} value = {maxLength} />
        <button type = "button" onClick = {updateHandler}> {buttonName}  </button>
    </>
}


export default SearchBar;