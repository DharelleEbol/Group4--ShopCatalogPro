import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/productDetails.jsx'
import Home from './pages/home.jsx'
import Cart from './pages/cart.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetails" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
