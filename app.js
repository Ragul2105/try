const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const authroutes = require('./routes/authRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/css',express.static("public/css"));
app.use('/images',express.static("public/images"));
app.use(authroutes);


mongoose.connect("mongodb://localhost:27017/yazhini",{
    useUnifiedTopology:true,
    useNewUrlParser: true
}).then(()=>{
    console.log(`mongodb connected`);
}).catch((err)=>{
    console.log(err);
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});