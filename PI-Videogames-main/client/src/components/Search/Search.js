import React from 'react'
import { getByNameVideoGame } from '../../redux/action'
import { useDispatch } from 'react-redux';
import s from '../Search/Search.module.css'
import { useState } from 'react';

export const Search = () => {

    const dispatch = useDispatch()
    const [name, SetName] = useState("");

    // useEffect(() => {dispatch(getVideoGame())})
    const handleChange = (e) => {
        e.preventDefault()
        SetName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getByNameVideoGame(name))
        SetName('')
    }

    return (
        <div className={s.formu}>
            {/* <div >Search</div> */}
            <form action=''  onSubmit={handleSubmit}>
                <input type='text'
                    placeholder='Search'
                    onChange={handleChange}
                    value={name}
                    autoComplete='off'
                />
            </form>

            <button className={s.inputButton} onClick={handleSubmit} type='submit' value=''>🍳</button>
        </div>
    )
}