import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getGenre, postCreate } from '../../redux/action'
import s from './Create.module.css'
import imgFondo from '../../asset/Videogames.jpeg'

const Create = () => {


  // Validates 
  const validate = (input) => {
    let errors = {}

    if (input.name === "") {
      errors.name = "Name required!"

    } else if (input.name.length < 3) {
      errors.name = 'Minimum 3 letters'

    } else if (!input.description) {
      errors.description = "summary must be complete"

    } else if (input.description.length < 20) {
      errors.description = 'Minimum 20 letters'

    } else if (input.rating < 0 || input.rating > 10) {
      errors.rating = 'Maximum up to 10'

    } else if (input.released === "") {
      errors.released = "required field"

    } else if (input.genres.length === 0) {
      errors.genres = "it has to be a different genres"

    } else if (!input.rating) {
      errors.rating = "required field"

    } else if (!input.image.includes("https")) {
      errors.image = 'Please insert an image type URL https'

    } else if (input.platforms === "") {
      errors.platforms = "required field"
    }
    return errors
  }

  // Validates 
  const dispatch = useDispatch()
  const genre = useSelector(state => state.genres)

  let navigate = useNavigate()
  const [errors, setErrors] = useState({
    name: 'name required'
  })
  const [input, setInput] = useState({
    name: '',
    image: '',
    description: '',
    rating: '',
    platforms: [],
    released: '',
    genres: []
  })

  const handleChange = (e) => {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.value]: e.target.value
    }))
  }

  const handleSelect = (e) => {

    if (input.genres.includes(e.target.value)) {
      return 'Genres exists'
    } else {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value]
      })
    }

    setErrors(validate({
      ...input,
      [e.target.value]: e.target.value
    }))
  }


  const handleDelete = (el) => {
    setInput({
      ...input,
      genres: input.genres.filter(e => e !== el)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postCreate(input))
    alert("Videogame created successfully")
    setInput({
      name: '',
      image: '',
      description: '',
      rating: '',
      platforms: [],
      released: '',
      genres: []
    })
    navigate('/home')
  }

  useEffect(() => {
    dispatch(getGenre())
  }, [dispatch])


  return (
     // <div className={s.formulario}>
      <div className={s.contactContainer}>
        {/* <span className={s.divTitle}>CREATE VIDEOGAME</span> */}
            {/* <Link to="/home" className={s.buttonBack}>
              <span>back</span>
            </Link> */}
        <div className={s.contactForm}>

          <div id={s.sect1}>
            <div className={s.cardHeader}>
              <img src={imgFondo} alt="" />
            </div>
          </div>

          <div id={s.sect2}>

       
            <form className={s.Form} action="" onSubmit={(e) => handleSubmit(e)} >
            <span className={s.divTitle}>
                  CREATE VIDEOGAME
                  </span>

              <div>
              <label className={s.SubTitle} htmlFor="">Name</label>
                <input className={s.inputt}
                  type="text"
                  value={input.name}
                  name='name'
                  onChange={handleChange}
                />

                {
                  errors.name && (
                    <p className={s.error}>{errors.name}</p>

                  )
                }
              </div>

              <div>
              <label className={s.SubTitle} htmlFor="">URL Img</label>
                <input className={s.inputt}
                  type="text"
                  value={input.image}
                  name='image'
                  onChange={handleChange}
                />

                {
                  errors.image && (
                    <p className={s.error}>{errors.image}</p>
                  )
                }
              </div>


              <div>
              <label className={s.SubTitle} htmlFor="">Description</label>
                <input className={s.inputt}
                  type="text"
                  value={input.description}
                  name="description"
                  onChange={handleChange}
                />

                {
                  errors.description && (
                    <p className={s.error}>{errors.description}</p>
                  )
                }
              </div>

              <div>
              <label className={s.SubTitle} htmlFor="">Released</label>
                <input className={s.inputt}
                  type="text"
                  value={input.released}
                  name="released"
                  onChange={handleChange}
                />

                {
                  errors.released && (
                    <p className={s.error}>{errors.released}</p>
                  )
                }
              </div>

              <div className={s.subContainer}>
              <label className={s.SubTitle} htmlFor="">Rating</label>
                <input className={s.subinput}
                  type="range" min="1" max="10"
                  value={input.rating}
                  name="rating"
                  onChange={handleChange}
                />

                {
                  errors.rating && (
                    <p className={s.error}>{errors.rating}</p>
                  )
                }
                <label htmlFor="">{`Point: ${input.rating ? input.rating : 0}%`}</label>
              </div>

              <div>
              <label className={s.SubTitle} htmlFor="">Platforms</label>
                <textarea className={s.inputt} cols="23" onChange={handleChange} type="text" name="platforms" value={input.platforms}>
                </textarea>

                {
                  errors.platforms && (
                    <div><p className={s.error}>{errors.platforms}</p></div>
                  )
                }
              </div>

              <div>
              <label className={s.SubTitle} htmlFor="">Genres</label>
                <select className={s.inputt} onChange={handleSelect}>
                  <option value={input.genres} name="genres">Genres..</option>

                  {
                    genre?.map(c => {
                      return (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      )
                    })
                  }
                </select>

                {
                  errors.genres && (
                    <p className={s.error}>{errors.genres}</p>
                  )
                }
              </div>

              <button type='submit' className={s.bto} onSubmit={handleSubmit} disabled={Object.keys(errors).length === 0 ? false : true}>Crear</button>

            </form>

            <div className={s.cajaGenre}>

              {
                input.genres.map((el) => (
                  <div key={el} className={`${s.space} ${s.tagTeal}`}>
                    <button className={s.bt} onClick={() => handleDelete(el)}> x </button>
                    <span className={s.letraSpace}>{el}</span >
                  </div>
                ))
              }
            </div>

            {/* <input type="text" placeholder="email address" className="input-field" />
                  <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                  <button className="contact-btn">Send</button> */}
          </div>
        </div>
      </div>
    // </div>


  )
}

export default Create