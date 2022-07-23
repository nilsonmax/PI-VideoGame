import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom'
import { getDataClear, getIdVideoGame } from '../../redux/action';
import s from '../Details/Details.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './../Loading/Loading';

export const Details = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const details = useSelector((state) => state.detail)

    // console.log(details, 'DETAILS 1', id, 'id')
   
    useEffect(() => {
        dispatch(getIdVideoGame(id))
        dispatch(getDataClear())
    }, [dispatch, id])
 
    let [loading, setLoading] = useState(true)

    if (typeof details.name !== 'undefined' && loading) {
        // console.log('estoy en setLoading', loading)
        setLoading(false)
    } //  else {
    //      console.log(' no estoy en setLoading', loading)
    // }

    // console.log(details.name, 'DETAILS NAME')
    // console.log(details.id, 'DETAILS ID')

    return (
        <>
            {
                typeof details.name !== 'undefined' && !loading ? (
                    // return (

                    <div className={s.contenedor}>

                        <div className={s.content}>
                            {/* <Link to="/home"><span className={s.backButton}>Back </span></Link> */}

                            <div className={s.titlee}>
                                {details.name ? <h1>{details.name}</h1> : <h1>Videogame not Found</h1>}
                            </div>

                            <div className={s.description}>
                                <h4 >Description :</h4>
                                <p >{details.description ? details.description : "not found"}</p>

                            </div>
                            <div className={s.im}>
                                <img className={s.img} src={details.image ? details.image :
                                    'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'} alt="Pic not found" />
                            </div>
                            <section className={s.wrapper}>
                                <div className={s.columns}>
                                    <div className={s.column}>
                                        <h3 className={s.textFirst}>Genres:</h3>
                                        {/* {!details.createdInDb ? details.genres.map((e, i) => <h2 key={i} className={s.contentFirst}>{e.name}</h2>)
                                            : details.genres.map((e, i) => <h2 key={i} className={s.contentFirst}>{e.name}</h2>)
                                        } */}
                                        {details && details.genres.map((e, i) => <h2 key={i} className={s.contentFirst}>{e.name}</h2>)
                                              }
                                    </div>

                                    <div className={s.column}>
                                        <h3 className={s.textFirst}>Released:</h3>
                                        <h3 className={s.contentFirst}>{details.released}</h3>
                                    </div>

                                    <div className={s.column}>
                                        <h3 className={s.textFirst}>Rating:</h3>
                                        <h3 className={s.contentFirst}>{details.rating}% </h3>
                                    </div>
                                </div>
                            </section>

                            <div className={s.column}>
                                <h4 className={s.textFirst}>Platforms:</h4>
                                {Array.isArray(details.platforms) ? details.platforms.map(e => <li className={s.contentSecond} key={e.number}>{e}</li>)
                                    : <li className={s.contentSecond}>{details.platforms}</li>
                                }
                            </div>
                        </div>

                    </div>

                ) : (!details.name !== 'undefined' && loading ? <Loading /> : <Loading />)

            }

        </>)
}
