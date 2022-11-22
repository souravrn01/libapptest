const express = require('express')
const cors = require('cors')
const logger = require('morgan')
require('./middlewares/mongoDB')

const app = new express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(logger('dev'))

const path = require('path');
app.use(express.static('./dist/frontend'));


const api = require('./routes/api')
app.use('/api', api)


app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist//frontend/index.html'))
})


var PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server running at :${PORT}...`);
})



