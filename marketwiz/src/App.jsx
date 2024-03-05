import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router-dom'
import Index from './components/Index'
import Login from './components/Login'
import Contact from './components/Contact'

/* Add the navbar hero team contacts and footer here */
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
