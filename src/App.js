import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Products from './components/Products'

function App() {
  return (
    <>
    <NavBar/>

    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/product" element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App