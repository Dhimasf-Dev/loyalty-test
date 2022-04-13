import { LIST_GENRE, LIST_MOVIE } from "../types/counter";

export const listGenre = (data) => ({
    type: LIST_GENRE,
    payload: data
})

export const listMovie = (data) => ({
    type: LIST_MOVIE,
    payload: data
})