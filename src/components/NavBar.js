import React from 'react'
import {FcLike} from "react-icons/fc"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='header'>
    <FcLike className='icon'/>
    <h2>Nwenebalonno phones</h2>
    <ul>
    <li> <Link to ="/">Home</Link> </li>
    <li> <Link to ="/about"> About Us</Link> </li>
    <li> <Link to ="/product"> Products</Link> </li>
    <li> <Link to ="/contact">Contact Us </Link> </li>

     </ul>


    </div>
  )
}

export default NavBar