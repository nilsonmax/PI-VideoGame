import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME_VIDEOGAMES = "GET_BY_NAME_VIDEOGAMES";
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
            console.log(id, 'id resp data')
            const resp = await axios.get(`http://localhost:3001/videogames/${id}`)
            console.log(resp.data, ' resp data')
            return dispatch({
                type: GET_DETAILS_VIDEOGAMES,
                payload: resp.data,
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

export const getFilterGenre = (payload) => {
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

export const getFilterMaxMin = (payload) => {
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

export const postCreate = (payload) => {

    return async (dispatch) => {
        try {

            await axios.post(
                "http://localhost:3001/videogames/create",
                payload
            )
            // console.log(payload, 'payload', json, 'json')
            return dispatch({
                type: POST_CREATE,
                payload: payload
            })

        } catch (error) {
            console.log(error)

        }
    }

}