import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME_VIDEOGAMES = "GET_BY_NAME_VIDEOGAMES";
export const GET_ID_VIDEOGAMES = "GET_ID_VIDEOGAMES";
export const GET_DETAILS_VIDEOGAMES = "GET_DETAILS_VIDEOGAMES";
export const GET_GENRE = "GET_GENRE";
export const FILTER_GENRE = "GET_FILTER_GENRE";
export const FILTER_ASC = "FILTER_ASC";
export const FILTER_MIN = "FILTER_MIN";
export const FILTER_CREAD = "FILTER_CREAD";
export const POST_CREATE = "POST_CREATE";

export const getVideoGame = () => {
    return async (dispatch) => {
        try {

            const resp = await axios.get(`http://localhost:3001/videogames`)
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: resp.data
            })

        } catch (error) {
            console.log(error)
        }

    }
}

export const getIdVideoGame = (id) => {
    return async (dispatch) => {
        try {

            const resp = await axios.get(`http://localhost:3001/videogames/:${id}`)
            return dispatch({
                type: GET_ID_VIDEOGAMES,
                payload: resp.data
            })

        } catch (error) {
            console.log(error)
        }

    }
}

export const getByNameVideoGame = (name) => {
    return async (dispatch) => {
        try {

            const resp = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({
                type: GET_BY_NAME_VIDEOGAMES,
                payload: resp.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const getGenre = () => {
    return async (dispatch) => {
        const resp = await axios.get(`http://localhost:3001/genres`)
        return dispatch({
            type: GET_GENRE,
            payload: resp.data
        })
    }
}

export const getfilterGenre = (payload) => {
    return {
        type: FILTER_GENRE,
        payload
    }
}

export const getFilterAsc = (payload) => {
    return {
        type: FILTER_ASC,
        payload
    }
}

export const getFilterMax = (payload) => {
    return {
        type: FILTER_MIN,
        payload
    }
}

export const getFilterCreate = (payload) => {
    return {
        type: FILTER_CREAD,
        payload
    }
}