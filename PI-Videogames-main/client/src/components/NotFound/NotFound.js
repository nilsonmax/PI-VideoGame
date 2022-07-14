import React from 'react'
import s from "../NotFound/NotFound.module.css"
import images from "../../asset/le404.png"
const NotFound = () => {
  return (
    <div>
        <div className={s.notfound}>
        <img width={450} src={images} alt="not found" />
        </div>
    </div>
  )
}

export default NotFound