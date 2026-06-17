import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import History from './pages/History'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
    const[isLogged, setIsLogged] = useState(false)

    return(
        <>
        {isLogged && <Navbar />}

        <Routes>
            <Route path='/' element={isLogged ? <Home/> : <Register setIsLogged={setIsLogged} />} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/register' element={<Register setIsLogged={setIsLogged} />} />
        </Routes>

        <ToastContainer
        position="top-right"
        autoClose={3000}
      />
        </>
    )
}