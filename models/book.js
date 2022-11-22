const mongoose = require('mongoose')
const schema = mongoose.Schema

const bookSchema = new schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },jenre:{
        type: String,
        required: true
    },language:{
        type: String,
        required: true
    }
})

let bookData = mongoose.model('bookData', bookSchema)
module.exports = bookData