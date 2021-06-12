const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');


//middleware
app.use(bodyParser.json());
app.use(cors());


//import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);



//routes
app.get('/',(req,res)=>{
    res.send('we ar on home');
});






//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology: true},()=>
console.log('Connected to db done')
);
// how to we start listening

app.listen(3000); 