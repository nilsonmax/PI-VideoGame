import React from 'react'
import { useDispatch } from 'react-redux';
import { getFilterAsc, getFilterCreate, getFilterGenre, getFilterMaxMin, getVideoGame } from '../../redux/action';
import { useEffect } from 'react';

// const Options = ({ set }) => {
const Options = (genre) => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getVideoGame());
    // }, [dispatch]);

    useEffect(() => {
        if (Object.entries(genre).length === 0) {
            console.log(genre,'en genreUrl 1')
            dispatch(getVideoGame());
        }else {
            const v=Object.values(genre).toString()
            console.log(genre,Object.values(genre).toString(),'en genreUrl 2')
            console.log(v)
            dispatch(getFilterGenre(v));
        }
    }, [dispatch]);

    const handleGenre = (e) => {
        e.preventDefault()
        dispatch(getFilterGenre(e.target.value))
        // set(1)
    }

    const handleByAZ = (e) => {
        e.preventDefault()
        dispatch(getFilterAsc(e.target.value))
        // set(1)
    }

    const handleRating = (e) => {
        e.preventDefault()
        dispatch(getFilterMaxMin(e.target.value))
        // set(1)
    }

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(getFilterCreate(e.target.value))
        //    set(1)
    }

    return (
        <div>
            <div>
                <label htmlFor="">Filter By Genre:</label>
                <select onChange={handleGenre}>
                    <option value="All">Genre..</option>
                    <option value="adventure">Adventure</option>
                    <option value="action">Action</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Filter By A-Z:</label>
                <select onChange={handleByAZ}>
                    <option value="All">Alphabetical Order</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Filter Rating:</label>
                <select onChange={handleRating}>
                    <option value="All">Rating..</option>
                    <option value="min">Min Rating</option>
                    <option value="max">Max Rating</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Filter By:</label>
                <select onChange={(e) => handleCreate(e)} >
                    <option value='ALL'> Total Videogames </option>
                    <option value='createdInDb'> Videogames Created </option>
                    <option value='JE'> Videogames Api </option>
                </select>
            </div>

        </div>
    )
}

export default Options