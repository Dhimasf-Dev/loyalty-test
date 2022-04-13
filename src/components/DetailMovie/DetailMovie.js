import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './DetailMovie.css'

function DetailMovie() {
  const { state } = useLocation()
  const [detailmovie, setDetailMovie] = useState({})

  const getDetailMovie = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${state}?api_key=2fccde01a371b106b09a241d6d1d5b49`)
    .then(res => setDetailMovie(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getDetailMovie()
  }, [])

  return (
    <div className='detail-container'>
      {console.log(detailmovie)}
      <img className='cover-img' src={`https://image.tmdb.org/t/p/original${detailmovie.poster_path}`} alt="cover" />
      <div>{detailmovie.title}</div>
      <div>{detailmovie.tagline}</div>
      <div>{detailmovie.release_date}</div>
      <div>{detailmovie.vote_average}</div>
    </div>
  )
}

export default DetailMovie