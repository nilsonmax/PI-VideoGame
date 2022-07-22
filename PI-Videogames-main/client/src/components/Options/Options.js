// import React, { useMemo } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { getFilterAsc, getFilterCreate, getFilterMaxMin} from '../../redux/action';
// import { useEffect } from 'react';
import s from './Options.module.css'

// const Options = ({ set }) => {
// const Options = (genre, {set}) => {
// function useQuery() {
//     const { search } = useLocation();

//     return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const Options = () => {
    const dispatch = useDispatch();
    // console.log(genre, 'genre')
    // useEffect(() => {
    //     dispatch(getVideoGame());
    // }, [dispatch]);
    // useEffect(() => {
    //     dispatch(getGenre())
    // }, [dispatch])

   
        // const obj = useMemo(() => {
        //     return genreUrl;
        // }, []);
    

    // useEffect(() => {
    //     if (Object.entries(obj).length === 0) {
    //         // console.log(obj,'en genreUrl 1')
    //         dispatch(getVideoGame());
    //     } else {
    //         // dispatch(getVideoGame());
    //         console.log(obj.genreUrl, 'en genreUrl 2')
    //         // console.log(v, 'ulr 3')
    //         dispatch(getFilterGenre(obj.genreUrl));
    //     }
    // }, [dispatch, obj.genreUrl]);

    // const genress = useSelector(state => state.genre)

    // const handleGenre = (e) => {
    //     e.preventDefault()
    //     dispatch(getFilterGenre(e.target.value))
    //     // set(1)
    // }

    const handleByAZ = (e) => {
        e.preventDefault()
        dispatch(getFilterAsc(e.target.value))
        // set(1)
    }

    const handleRating = (e) => {
        e.preventDefault()
        dispatch(getFilterMaxMin(e.target.value))
        //set(1)
    }

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(getFilterCreate(e.target.value))
        // set(1)
    }

    return (
        <div className={s.firstContainer}>
            <div className={s.linea}></div>
            {/* <div>
                <label htmlFor="">Filter By Genre:</label>
                <select onChange={handleGenre}>
                    <option value="All">Genre..</option>
                    {/* <option value="adventure">Adventure</option>
                    <option value="action">Action</option> 
                    {
                        genress?.map((c) => {
                            return (
                                <option key={c.id} value={c.name}>{c.name}</option>
                            )
                        })
                    }
                </select>
            </div> */}
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