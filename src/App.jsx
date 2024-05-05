import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='appointment' element={<Appointment/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)
const App = () => {
  return (
    <>
      
    </>
  )
}

export default App
