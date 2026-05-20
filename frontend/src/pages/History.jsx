import api from '../services/api'
import {useEffect,useState} from 'react'
import BlogCard from '../componets/BlogCard'

export default function History() {
    const[blogs, setBlogs] = useState([])

    useEffect(()=> {
        const fetchBlogs = async() => {
            const res = await api.get('/')
            setBlogs(res.data)
        }
        fetchBlogs()
    }, [])


    return(
        <>
        <div className='flex flex-col gap-3 items-center justify-center'>
            {blogs.length === 0 ? (
                <>
                <p className='text-3xl text-amber-900 mt-10'>No Blogs Yet...</p>
               
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