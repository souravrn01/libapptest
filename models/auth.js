const mongoose = require('mongoose')
const schema = mongoose.Schema

const authSchema = new schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

let authData = mongoose.model('authData', authSchema)
module.exports = authData
