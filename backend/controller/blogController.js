const Blog = require('../models/Blog')

//create
const createBlog = async(req, res)=> {
    try {
        const blog = await Blog.create({
            title: req.body.title,
            content: req.body.content,
        })
        res.status(201).json(blog)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//read
const readBlog = async(req, res)=> {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//update
const updateBlog = async(req, res)=> {
    try {
        const blog = await Blog.findById(req.params.id)
           if(!blog) return res.status(404).json({message: 'Blog not found!'})

        blog.title = req.body.title || blog.title
        blog.content = req.body.content || blog.content
        
        const updated = await blog.save()

        res.json(updated)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//delete
const deleteBlog = async(req, res)=> {
    try {
        const blog = await Blog.findById(req.params.id)
           if(!blog) return res.status(404).json({message: 'Blog not found!'})

        await blog.deleteOne()
        res.json({message: 'Blog deleted!'})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



module.exports = {readBlog, createBlog, updateBlog, deleteBlog}