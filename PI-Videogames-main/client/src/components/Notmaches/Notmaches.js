import React from 'react'
import s from "../NotFound/NotFound.module.css"
import images from "../../asset/no-maches.jpg"
const NotMaches = () => {
  return (
    <div>
        <div className={s.notfound}>
        <img width={450} src={images} alt="not found" />
        </div>
    </div>
  )
}

export default NotMaches