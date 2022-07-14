import React from 'react'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilterGenre, getVideoGame } from '../../redux/action';
import s from "./Videogames.module.css"
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import Options from './../Options/Options';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';

export const Videogames = () => {
    let { search } = useLocation();
    let query = new URLSearchParams(search)
    // console.log(query, 'aqui1')
    let genreUrl = query.get('genname')
    // console.log(genreUrl, 'aui2')

    const videogame = useSelector((state) => state.videogame)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (genreUrl) {
    //         console.log('en genreUrl')
    //         dispatch(getFilterGenre(genreUrl));
    //     }else {
    //         console.log('en genreUrl2')
    //         dispatch(getVideoGame());
    //     }
    // }, [dispatch]);

    

    // useEffect(() => {
    //     dispatch(getVideoGame());
    // }, [dispatch]);

    // let pase = 1;
    // const handleGenre = (e) => {
    //     e.preventDefault()
    //     dispatch(getFilterGenre(e.target.value))
    //     set(1)
    // }


    let [loading, setLoading] = useState(true);

    // const dispatch = useDispatch()
    // const videogame = useSelector((state) => state.videogame)

    // useEffect(() => {
    //     dispatch(getVideoGame())
    // }, [dispatch])

    if (videogame.length > 0 && loading) {
        setLoading(false)
    }

    return (
        <>
        {genreUrl?<Options genre={genreUrl}/>:<Options />}
            
            {
                videogame.length > 0 && !loading ? (
                    <div className={s.flex}>{
                        videogame?.map((r) => {
                            return (
                                <Card
                                    key={r.id + uuidv4()}
                                    id={r.id}
                                    name={r.name}
                                    image={r.image}
                                    // genres={r.createdInDb ? r.genres.map(r => <p className={s.genre} >{r.name} {console.log('aquiname',r.name)}</p>) : r.genres}
                                    genres={r.genres.map(r => <p className={s.genre} >{r.name}</p>)}
                                    rating={r.rating}
                                />
                            )
                        })}
                    </div>
                ) : !videogame.length > 0 && loading ? (
                    <Loading />
                ) : (
                    <NotFound />
                )
            }
        </>
    )


}
