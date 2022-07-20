import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { getFilterAsc, getFilterCreate, getFilterGenre, getFilterMaxMin, getVideoGame } from '../../redux/action';
import { useEffect } from 'react';
import s from './Options.module.css'

// const Options = ({ set }) => {
const Options = (genre, {set}) => {
    const dispatch = useDispatch();
console.log(genre, 'genre', set, 'set')
    // useEffect(() => {
    //     dispatch(getVideoGame());
    // }, [dispatch]);
    const obj = useMemo(() => {
        return genre;
      }, []);

       useEffect(() => {
       if (Object.entries(obj).length === 0) {
            console.log(obj,'en genreUrl 1',set, 'set')
            dispatch(getVideoGame());
        }else {
            // dispatch(getVideoGame());
            console.log(obj.genre,'en genreUrl 2', set, 'set')
              // console.log(v, 'ulr 3')
            dispatch(getFilterGenre(obj.genre));
        }
    }, [dispatch, obj.genre]);

    //  else {
    //     console.log(v,'en genreUrl 2')
    //     dispatch(getVideoGame());
    // }

    const handleGenre = (e) => {
        e.preventDefault()
        dispatch(getFilterGenre(e.target.value))
        set(1)
    }

    const handleByAZ = (e) => {
        e.preventDefault()
        dispatch(getFilterAsc(e.target.value))
        set(1)
    }

    const handleRating = (e) => {
        e.preventDefault()
        dispatch(getFilterMaxMin(e.target.value))
        set(1)
    }

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(getFilterCreate(e.target.value))
           set(1)
    }

    return (
        <div className={s.firstContainer}>
        <div className={s.linea}></div>
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