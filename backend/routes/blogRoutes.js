const express = require('express');
const router = express.Router()

const {readBlog, createBlog, updateBlog, deleteBlog} = require('../controller/blogController')


router.route('/')
      .get(readBlog)
      .post(createBlog)

router.route('/:id')
      .put(updateBlog)
      .delete(deleteBlog)


module.exports = router