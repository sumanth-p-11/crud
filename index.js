const express=require('express');
const app=express();
var exphbs  = require('express-handlebars');
const mongoose=require("mongoose");
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const port=5000;
app.listen(port,()=>{
    console.log("App is running on Port "+port);
})

/*app.get("/", (req,res)=>{
    res.send("Home Page");
})

app.get("/about", (req,res)=>{
    res.send("About Us Page");
})

app.get("/contact", (req,res)=>{
    res.send("Contact Us Page");
})
*/

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

let mongoDBUri=require('./config/keys').mongoDBUri;
    mongoose.connect(mongoDBUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connected!");
}).catch((err)=>{
    console.log(err);
})


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
const taskRoute=require("./routes/Task");
app.use("/",taskRoute);