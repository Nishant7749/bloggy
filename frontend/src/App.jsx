import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import History from './pages/History'
import Register from './pages/Register'

export default function App() {
    return(
        <>
        <Navbar />

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
        </>
    )
}