import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { listMovie } from "../../redux/actions/counter"
import { useNavigate } from "react-router-dom"

function ListMovie() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)

    const getListMovie = () => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`)
        .then(res => dispatch(listMovie(res.data.results)))
        .catch(err => console.log(err))
    }

    const perviousBtn = () => {
        let newPage = page - 1
        setPage(newPage)
    }

    const nextBtn = () => {
        let newPage = page + 1
        setPage(newPage)
    }

    useEffect(() => {
        getListMovie()
    }, [page])

  return (
    <div>
        <div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Poster</th>
                        <th scope="col">Title</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Vote Average</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        counter.dataMovie.map((val, index) => {
                            return (
                                <tr onClick={() => navigate('/detailmovie', {state: val.id})}>
                                    <th scope="row">{index + 1}</th>
                                    <td><img style={{width: '70px'}} src={`https://image.tmdb.org/t/p/original${val.poster_path}`} /></td>
                                    <td>{val.title}</td>
                                    <td>{val.release_date}</td>
                                    <td>{val.vote_average}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item mr-3" onClick={perviousBtn} ><a class="page-link">Previous</a></li>
                <li class="page-item" onClick={nextBtn} ><a class="page-link">Next</a></li>
            </ul>
        </nav>  
    </div>
  )
}

export default ListMovie