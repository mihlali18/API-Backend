const req= require('express/lib/request')
const req= require('express/lib/response')
const db= require('../models')
const posts =db.posts;

//OUR crud will create and save post to database

exports.create=(req,res)=>{
  if (!req.body.title) {
    res.status(400).send({message:"Content of the post cannot be empty!"});
    return           
  }                

//CREATE
const post=new post({
      title:req.body.description,
      description:req.body.description,
      published: req.body.published?req.published:true             
});

//Save Our Post in the database
post.save(post)
.then(data =>{
        res.send(data)
})
.catch(err => {
       res.status(500).send({
       message:
       err.message || "Some error occurred while retrieving the Post"
  });
  });
}
// Retrieve all Posts  from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
   var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
                  
  Posts.find(condition)
    .then(data => {
    res.send(data);
       })
   .catch(err => {
   res.status(500).send({
    message:
     err.message || "Some error occurred while retrieving posts."
  });
    });
                  };
     //Find a single Post with an id
  exports.findOne = (req, res) => {
  const id = req.params.id;
                  
  Posts.findById(id)   
  .then(data => {
    if (!data)
    res.status(404).send({ message: "Not found Post with id " + id });
   else res.send(data);
     })
.catch(err => {
   res
    .status(500)
    .send({ message: "Error retrieving Post with id=" + id });
     });
      };
    // Update a Tutorial by the id in the request
    exports.update = (req, res) => {
     if (!req.body) {
 return res.status(400).send({
  message: "Data to update can not be empty!"
 });
 }
                  
 const id = req.params.id;
                  
 Posts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
 .then(data => {
 if (!data) {
 res.status(404).send({
  message: 'Cannot update Post with id=${id}. Maybe Post was not created!'
 });
 } else res.send({ message: "Post was updated successfully." });
})
.catch(err => {
 res.status(500).send({
 message: "Error updating the Post with id=" + id
 });
 });
 };
            //DELETE POST
// Delete a Post with the specified id in the request
exports.delete = (req, res) => {
 const id = req.params.id;
                  
 Posts.findByIdAndRemove(id, { useFindAndModify: false })
 .then(data => {
 if (!data) {
 res.status(404).send({
 message:' Cannot delete POST with id=${id}. Maybe Post was not created!'
});
 } else {
 res.send({
 message: "Post was deleted successfully!"
 });
 }
})
 .catch(err => {
 res.status(500).send({
  message: "Could not delete Post with id=" + id
});
 });
 };      


 // Delete all Posts from the database.
 exports.deleteAll = (req, res) => {
 Posts.deleteMany({})
 .then(data => {
res.send({
 message: '${data.deletedCount} Posts were deleted successfully!'
 });
 })
.catch(err => {
 res.status(500).send({
 message:
 err.message || "Some error occurred while removing all posts."
 });
});
 };

                 
 // Find all published Posts
exports.findAllPublished = (req, res) => {
 Posts.find({ published: true })
.then(data => {
 res.send(data);
 })
.catch(err => {
 res.status(500).send({
message:
 err.message || "Some error occurred while retrieving posts."
 });
 });
};
                                             