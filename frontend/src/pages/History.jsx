import api from '../services/api'
import {useEffect,useState} from 'react'
import BlogCard from '../componets/BlogCard'
import empty from '../assets/empty.png'

export default function History() {
    const[blogs, setBlogs] = useState([])

    useEffect(()=> {
        const fetchBlogs = async() => {
            const res = await api.get('/blog')
            setBlogs(res.data)
        }
        fetchBlogs()
    }, [])


    return(
        <>
        <div className='flex flex-col gap-3 items-center justify-center'>
            {blogs.length === 0 ? (
                <>
               <img className='h-screen opacity-75 z-0 w-full' src={empty} alt="empty page" />
                </>
            ): (
                blogs.map((blog)=> {
                    return <BlogCard key={blog._id} blog={blog} />
                })
            )}
        </div>
        </>
    )
}