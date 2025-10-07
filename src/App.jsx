import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/productDetails.jsx'
import Home from './pages/home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDetails" element={<Products />} />
    </Routes>
  )
}

export default App
