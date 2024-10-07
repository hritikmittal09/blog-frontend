import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './pages/Blog'
import HeroSection from './pages/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDeshBoard'
import AdminLoginPage from './pages/auth'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/admin' element = {<AdminLoginPage/>}/>
    </Routes>
    </>
  )
}

export default App
