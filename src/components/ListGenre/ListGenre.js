import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { listGenre } from "../../redux/actions/counter"

function ListGenre() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const getListGenre = () => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49')
        .then(res => dispatch(listGenre(res.data.genres)))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getListGenre()
    }, [])

  return (
    <div>
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    counter.dataGenre.map((val, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                            </tr>  
                        )
                    })
                }             
            </tbody>
        </table>
    </div>
  )
}

export default ListGenre