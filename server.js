const express =require ('express'); //Calling the express module
const bodyParser = require('body-parser');
const app = express();
const cors=  require('cors');
const { request } = require('express');



app.use (bodyParser.json())
app.use(bodyParser.urlencoded({
      extended:true,              
})
);
const Port=5050
var corsOptions = {
      origin: "http://localhost:8081/"
    };

app.get('/',(req,res) =>{
     res.send("Server Online") [{
      extended:true,
     }]             
});
const db = require("../node basics/models");
 db.mongoose
   .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
   .then(() => {
     console.log("Connected to the database!");
   })
   .catch(err => {
     console.log("Cannot connect to the database!", err);
     process.exit();
   });
//    require('./ROUTES/post.routes')(app);
require('./routes/post.routes')(app)

app.listen(Port,()=>{
console.log(`Server running on port:${Port} `)

})