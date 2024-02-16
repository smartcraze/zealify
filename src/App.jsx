import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar';
import About from './components/Header/About';
import Home from './components/Main/Home';
import Profile from './components/Main/Profile';

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
    path:"/profile",
    element: <> <Navbar/><Profile/></>
  }
])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
