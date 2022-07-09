import {
    GET_VIDEOGAMES,
    GET_BY_NAME_VIDEOGAMES,
    GET_ID_VIDEOGAMES,
    GET_DETAILS_VIDEOGAMES,
    GET_GENRE,
    FILTER_GENRE,
    FILTER_ASC,
    FILTER_MIN,
    FILTER_CREAD,
    POST_CREATE
} from '../action/index.js'

const initialState = {
    videogame: [],
    copy: [],
    details: {},
    genre: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogame: action.payload,
                copy: action.payload
            }

        case GET_DETAILS_VIDEOGAMES:
            return {
                ...state,
                details: action.payload[0]
            }

        case GET_ID_VIDEOGAMES:
            return {
                ...state,
                videogame: action.payload,
            }

        case GET_BY_NAME_VIDEOGAMES:
            return {
                ...state,
                videogame: action.payload,
            }


        case POST_CREATE:
            return {
                ...state,
                videogame: action.payload,
            }
        case FILTER_CREAD:
            // console.log(action.payload)
            const creatorFilter = action.payload === "createdInDb"
                ? state.copy?.filter((el) => el.createdInDb) : state.copy?.filter((el) => !el.createdInDb)
            // console.log(creatorFilter)
            // console.log(state.copy)
            return {
                ...state,
                videogame: action.payload === "ALL" ? state.copy : creatorFilter
            }

        case GET_GENRE:
            return {
                ...state,
                genre: action.payload,
            }

        case FILTER_GENRE:
            const allVideogame = state.copy;
            // console.log(allVideogame)
            const all = action.payload === "All"
                ? allVideogame
                : allVideogame.filter((r) => r.genre?.includes(action.payload))
            //  console.log(all)

            return {
                ...state,
                videogame: all
            }

        case FILTER_ASC:
            let orden = action.payload === "asc"
                ? state.videogame.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                : state.videogame.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })

            return {
                ...state,
                videogame: [...orden]
            }

        case FILTER_MIN:
            const scoreSorted = state.videogame ? state.videogame : state.videogame
            let orderByScore = action.payload === "min"
                ? scoreSorted.sort((a, b) => {
                    if (a.rating < b.rating) return -1
                    if (a.rating > b.rating) return 1
                    return 0
                })
                : scoreSorted.sort((a, b) => {
                    if (a.rating < b.rating) return 1
                    if (a.rating > b.rating) return -1
                    return 0
                })

            return {
                ...state,
                recipe: [...orderByScore]
            }

        default:
            return state
    }
}

export default reducer;