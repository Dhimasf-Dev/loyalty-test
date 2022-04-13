import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='mb-4'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Movie</a>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li style={{marginLeft: '900px'}} class="nav-item active">
                        <Link className='mr-3' to="/listgenre">Genre</Link>
                        <Link to="/">Movie</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header