const express = require('express');
const cors = require('cors');
const blogRouter = require('./routes/blogRoutes')
const authRouter = require('./routes/authRoutes')
const connectDB = require('./config/db');
const app = express()


app.use(cors())
app.use(express.json()) 

connectDB()

app.use('/blog', blogRouter)
app.use('/auth', authRouter)

app.get('/', (req,res)=> {
    res.send('Run Blog on URL [/blog]')
})

app.listen(3000, ()=> {
    console.log('[server connected] http://localhost:3000')
})
