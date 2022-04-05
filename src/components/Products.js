import React from 'react'
import Phone from "../images/phone 1.webp"
import phone from "../images/phone 2.jpg"
import phones from "../images/phone 3.jpg"



function Products() {
  return (
    <div>
    <div className='firstrow'>

    <div className='card'>
    <h2>sumsung</h2>
    <img src={Phone} alt=""/>
    <p>Ghc1,300 </p>
    <button>Buy Me </button>
    </div>

<div className='card'>
    <h2> iphone</h2>
    <img src={phone} alt=""/>
    <p>Ghc 10,000 </p>
    <button>Buy Me</button>
    </div>
    <div className='card'>
    <h2>sumsung</h2>
    <img src={phones} alt=""/>
    <p>Ghc1,300 </p>
    <button>Buy Me </button>
    </div>
    </div>


    <div className='headphones'></div>

    <div className='pendrives'></div>

    <div className='phonecas'></div>
       </div>
    
     




    
  )
}

export default Products

