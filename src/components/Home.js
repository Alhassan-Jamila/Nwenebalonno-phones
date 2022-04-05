import React from 'react'
import phones from "../pics/phone 2.jpg"
import head from "../pics/headphone 3.webp"
import drive from "../pics/pendrive 3.jpg"
import cases from "../pics/phone case 3.jpg"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='product'>
    <div className='firstrow'>

    <div className='card'>
    <h2>SmartPhones</h2>
    <img src={phones} alt=""/>
    <p>we sell qualify SmartPhones at affordable prices </p>
    <button> <Link to ="/products"> View phones</Link></button>
    </div>

<div className='card'>
    <h2> Headphones</h2>
    <img src={head} alt=""/>
    <p>we sell qualify SmartPhones at affordable prices </p>
    <button> <Link to ="/products"> View phones</Link></button>
    </div>
    </div>

    <div className='second-row'>

    <div className='card'>
    <h2>pen Drive</h2>
    <img src={drive} alt=""/>
    <p>we sell qualify SmartPhones at affordable prices </p>
    <button>View phones</button>
    </div>

    
    <div className='card'>
    <h2>phonecase</h2>
    <img src={cases} alt=""/>
    <p>we sell qualify SmartPhones at affordable prices </p>
    <button>View phones</button>
    </div>
    </div>
     </div>




    
  )
}

export default Home