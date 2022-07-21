import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getFilterGenre, getVideoGame } from '../../redux/action';
import s from "./Videogames.module.css"
import Loading from '../Loading/Loading';
// import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import Options from './../Options/Options';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import NotMaches from '../Notmaches/Notmaches';
import { Search } from '../Search/Search';
import Paginacion from '../Paginacion/Paginacion';
// import { getVideoGame } from '../../redux/action';
// import { useEffect } from 'react';

export const Videogames = () => {

    let { search } = useLocation();
    let query = new URLSearchParams(search)
    // console.log(query, 'aqui1')
    let genreUrl = query.get('genname')
    // console.log(genreUrl, 'aui2')

    const videogames = useSelector((state) => state.videogame)
//  console.log(videogames, 'videogames')
    //paginacion
    const [currentPage, setCurrentPage] = useState(1)
    const [couPerPage] = useState(12)
    const indexlast = currentPage * couPerPage; // devuelve 12
    const indexFirst = indexlast - couPerPage; // 0
    const allpages = videogames.slice(indexFirst, indexlast)
   
    // console.log(indexlast, 'last', indexFirst, 'first', allpages , 'allpages')

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // if (allpages.length > 0 && loading) {
    //     setLoading(false)
    // }

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

    if (allpages.length > 0 && loading) {
        setLoading(false)
    }

    return (
        <>
            <div className={s.menuOptions}>
                {<Search />}
                {  genreUrl ? <Options genre={genreUrl} /> : <Options  />} 
                 
            </div>
            <Paginacion videogame={videogames.length}
                couPerPage={couPerPage}
                paginado={paginado} />
            {
                allpages.length > 0 && !loading ? (
                    <div className={s.flex}>{
                        allpages?.map((r) => {
                            return (
                                <Card
                                    key={r.id}
                                    id={r.id}
                                    name={r.name}
                                    image={r.image}
                                    // genres={r.createdInDb ? r.genres.map(r => <p className={s.genre} >{r.name} {console.log('aquiname',r.name)}</p>) : r.genres}
                                    genres={r.genres.map(r => <p className={s.genre} >{r.name}</p>)}
                                    // genres={r.genres}
                                    rating={r.rating}
                                />
                            )
                        })}
                    </div>

                ) : !allpages.length > 0 && loading ? (
                    <Loading />
                ) : (
                    <NotMaches />
                )
            }
            <Paginacion videogame={videogames.length}
                couPerPage={couPerPage}
                paginado={paginado} />
        </>
    )


}
