import api from '../services/api'
import { useState } from 'react'
import {toast} from 'react-toastify'

export default function Blog() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const wordCount = () => {
        return content.trim() ? content.trim().split(/\s+/).length : 0
    }

    const handleSave = async () => {
        if (!title || !content) {
            alert('Title & Content are Required!')
            return
        }

        await api.post('/blog', { title, content })

        setTitle('')
        setContent('')
        toast.success("Blog Saved.")
    }



    return (
        <>
            <div className=' flex flex-col items-center justify-center h-screen'>
                <h1 className='mb-10 uppercase font-serif text-3xl font-bold text-amber-800'>New Blog</h1>
                <div className='h-120 w-200 border border-amber-900 rounded-md p-8 flex flex-col gap-5'>

                    <input className='border outline-none border-amber-700/20 bg-amber-700/10 p-2 rounded-md text-amber-900 text-center' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />

                    <textarea className='h-3/4 text-amber-900 outline-none border border-amber-700/20 bg-amber-700/10 p-2 rounded-md ' value={content} placeholder='Start Writing here...' onChange={(e) => setContent(e.target.value)} ></textarea>
                    <div className='text-xs text-amber-800 font-mono m-0 p-0 absolute right-80 top-50 '>words: {wordCount()}</div>

                    <button className='p-2 text-amber-900 uppercase hover:bg-amber-600/50 hover:border-amber-600/60 rounded-lg cursor-pointer border border-amber-600/50 bg-amber-600/40' onClick={handleSave}>Save</button>

                </div>
            </div>
        </>
    )
}