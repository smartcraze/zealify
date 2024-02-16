import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header/Navbar';
import About from './components/Header/About';
import Home from './components/Main/Home';
// import Games from './components/Main/Games';
import Gamecard from './components/Main/Gamecard';
import Games from './components/Main/Games';
import Ticktactoe from './components/Main/Tictactoe';

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
    path:"/play",
    element: <> <Navbar/><Games/></>
  },
  {
    path:"/playTictac",
    element: <> <Navbar/><Ticktactoe/></>
  },
  {
    path:"/games",
    element: <> <Navbar/><Gamecard/></>
  }
])

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
