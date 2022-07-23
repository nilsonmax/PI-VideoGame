import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getGenre, postCreate } from '../../redux/action'
import s from './Create.module.css'
import imgFondo from '../../asset/klipartz.com.png'

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

    } else if (!input.genres.length) {
     
      errors.genres = "required field genres"

    } else if (!input.platforms.length) {
      
      errors.platforms = "required field platforms"

    } else if (!input.rating) {
      errors.rating = "required field"

    } else if (!input.image.includes("https")) {
      errors.image = 'Please insert an image type URL https'

    }
    // else if (input.platforms) {
    //   console.log(input.platforms, 'input.platforms')
    //   errors.platforms = "required field"
    // }
    return errors
  }

  // Validates 
  const dispatch = useDispatch()
  const genre = useSelector(state => state.genre)

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

  const platforms = ['Xbox One', 'PlayStation 4', 'Xbox 360', 'PC', 'macOs', 'Linux', 'Xbox Series S/X', 'Xbox', 'PlayStation 5', 'Nintendo Switch', 'PlayStation 2', 'PlayStation 3']
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

  const handleSelectPlatforms = (e) => {

    if (input.platforms.includes(e.target.value)) {
      return 'platforms exists'
    } else {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value]
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

  const handleDeletePlatforms = (el) => {
    setInput({
      ...input,
      platforms: input.platforms.filter(e => e !== el)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(input, 'input submit')
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
    navigate('/')
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
              <textarea className={s.inputt} cols="23"
                type="text"
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
              <input
                type="date"
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
                type="range" min="1" max="10" step="0.01"
                value={input.rating}
                name="rating"
                onChange={handleChange}
              />

              {
                errors.rating && (
                  <p className={s.error}>{errors.rating}</p>
                )
              }
              <label htmlFor="">{`Point: ${input.rating ? input.rating : 0}`}</label>
            </div>

            {/* <div>
              <label className={s.SubTitle} htmlFor="">Platforms</label>
                <textarea className={s.inputt} cols="23" onChange={handleChange} type="text" name="platforms" value={input.platforms}>
                </textarea>

                {
                  errors.platforms && (
                    <div><p className={s.error}>{errors.platforms}</p></div>
                  )
                }
              </div> */}
            <div>
              <label className={s.SubTitle} htmlFor="">Platforms</label>
              <select className={s.inputt} onChange={handleSelectPlatforms}>
                <option value={input.platforms} name="platforms">Platforms..</option>

                {

                  platforms?.map((c, index) => {
                    return (
                      <option key={index} value={c}>{c}</option>
                    )
                  })
                  
                }
              </select>

              {
                errors.platforms && (
                  <p className={s.error}>{errors.platforms}</p>
                )
              }
              {/* {console.log(input.platforms, 'input.platforms')} */}
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

            <button type='submit' className={s.bto} disabled={Object.keys(errors).length === 0 ? false : true}>Crear</button>

          </form>

          <div className={s.cajaGenre}>

            {
              input.genres.map((el) => (
                <div key={el} className={`${s.space} ${s.tagTeal}`}>
                  <button className={s.bt} onClick={() => handleDelete(el)}> x </button>
                  <span className={s.letraSpace}>{el}</span >
                </div>
              ))
            }{
              input.platforms.map((el) => (
                <div key={el} className={`${s.space} ${s.tagTeal2}`}>
                  <button className={s.bt} onClick={() => handleDeletePlatforms(el)}> x </button>
                  <span className={s.letraSpace}>{el}</span >
                </div>
              ))

            }
            {/* { console.log(input.genres, 'input.genre')} */}
          </div>
        </div>
      </div>
    </div>
    // </div>


  )
}

export default Create