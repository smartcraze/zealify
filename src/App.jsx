import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar';
import About from './components/Header/About';
import Home from './components/Main/Home';

import Games from './components/Main/Games';

function App() {
const router=createBrowserRouter([
  {
    path:"/home",
    element: <> <Navbar/><Home/></>
  },
  {
    path:"/",
    element: <> <Navbar/><Home/></>
  },
  {
    path:"/about",
    element: <> <Navbar/><About/></>
  },
  {
    path:"/games",
    element: <> <Navbar/><Games/></>
  }
])

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
