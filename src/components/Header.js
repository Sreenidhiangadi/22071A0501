import React from 'react'
import {Link} from 'react-router-dom'
import Register from '../components/Register'
function Header() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-primary justify-content-end">


  
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item active text-secondary ">
        <Link class="nav-link" to="">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="register">Register </Link>
      </li>
  </ul>

</nav>
    </div>
  )
}

export default Header