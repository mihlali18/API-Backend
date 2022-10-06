module.exports= app =>{
     const posts = require('../controllers/post.controllers')    
     
     var router = require('express').Router;

//Create a new post 
router.post("/",posts.create)

//Retrieve all post
router.get('/',post.findAll);

//Retrieve a published post
router.get('/published',posts.findAllPublished)





}