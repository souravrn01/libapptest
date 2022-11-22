const express  = require('express')
const router = express.Router()
const BOOKDATA = require('../models/book')
const AUTHDATA = require('../models/auth')

//GET
router.get('/book',async(req, res)=>{
    try {
            let books = await BOOKDATA.find()
            res.send(books)
        
    } catch (error) {
        console.log('get error:',error);
    }
})

//POST
router.post('/book', async(req, res)=>{
    try {
            let book = {
                title: req.body.title,
                author: req.body.author,
                jenre: req.body.jenre,
                language:req.body.language
            }

            const newBook = new BOOKDATA(book)
            const savedBook = await newBook.save()
            res.send(savedBook)

    } catch (error) {
        console.log('post error:',error);
    }
})

// UPDATE
router.put('/book', async(req, res)=>{
    try {
            console.log(req.body)
            let id = req.body.id
            let update = {
                title: req.body.data.title,
                author: req.body.data.author,
                jenre: req.body.data.jenre,
                language:req.body.data.language
            }
            let updates = {$set: update}
            let updatedBook = await BOOKDATA.findByIdAndUpdate({"_id": id}, updates,{new:true})
            res.send(updatedBook)

    } catch (error) {
        console.log('update error:',error);
    }
})

//DELETE
router.delete('/book/:id',async(req, res)=>{
    try {
            let id = req.params.id
            let deleteBook = await BOOKDATA.findByIdAndDelete(id)
            res.send(deleteBook) 
    } catch (error) {
        console.log('delete error:',error);
    }
})

//SINGLE
router.get('/onebook/:id',async(req, res)=>{
    try {
            let id = req.params.id
            let singleBook = await BOOKDATA.findById(id)
            res.send(singleBook)


    } catch (error) {
        console.log('single error:',error);
    }
})

// for authentication

router.get('/login', async(req, res)=>{
    try {
        let userData = await AUTHDATA.find()
        res.send(userData)

    } catch (error) {
        console.log('get error: ', error);
    }
})

router.post('/signup', async (req, res)=>{
    try {
        let userData = {
            userName: req.body.name,
            email:req.body.email,
            password: req.body.password
        }
        const newData = new AUTHDATA(userData)
        const savedData = await newData.save()
        res.send(savedData)

    } catch (error) {
        console.log('post error:',error);
    }
})


module.exports = router