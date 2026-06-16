const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    }

} ,{timestamps: true})

const blogModel = mongoose.model('blogs', blogSchema)

module.exports = blogModel