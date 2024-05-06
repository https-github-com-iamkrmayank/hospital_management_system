// import React, { createContext, useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Services from './pages/Services'
import Layout from './Layout'
import Doctors from './Components/Doctors'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='appointment' element={<Appointment/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='doctors' element={<Doctors/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

// export const Context = createContext({isAuthenticated: false});
// const AppWrapper= ()=>{
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user,setUser] = useState({});
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='{classes.main}'>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
