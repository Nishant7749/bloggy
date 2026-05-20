const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/nishdb')
    console.log('DB connected.')
    } catch (error) {
        console.error('DB connection error!')
        process.exit(1)
    }
}

module.exports = connectDB