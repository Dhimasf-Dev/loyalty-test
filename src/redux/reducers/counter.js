import { LIST_GENRE, LIST_MOVIE } from "../types/counter";

const initialState = {
    dataGenre: [],
    dataMovie: []
}

function reducer(state = initialState, action){
    switch (action.type) {
        case LIST_GENRE:
            return {...state, dataGenre: action.payload}
        case LIST_MOVIE:
            return {...state, dataMovie: action.payload}
        default:
            return state
    }
}

export default reducer