import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/productDetails'
import Home from './pages/home'
import Cart from './pages/cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
