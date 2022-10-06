modules.exports = mongoose => {
     var schema = mongoose.schema( // Lets build a virtual schema to define
     {
        title: String,
        description: String,
        published: Boolean           
     },
     {timestamps: true}

     )  
     //Attach to JSON 
     schema.method("toJSON", function() {
                    const { __v, _id, ...object } = this.toObject();
                    object.id = _id;
                    return object;
                  });      
 const Posts = mongoose.model("posts", schema) 
       return Posts;           
                  
}


