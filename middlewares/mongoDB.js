const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://souravrn:Mongo321atlas@cluster0.z8fhr4f.mongodb.net/library',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log('mongoDB connected successfully!!!')
}).catch((error)=>{
    console.log(error.message)
}) 
