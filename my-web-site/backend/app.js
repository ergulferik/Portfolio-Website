//qDNkaLorE9A5twPZ
//engergulferik
const mongoose = require('mongoose')
const express= require("express")
const cors = require('cors');
const Card = require("./models/card")
const bodyParser = require("body-parser");

const app=express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());


mongoose.connect("mongodb+srv://engergulferik:qDNkaLorE9A5twPZ@cluster0.v6jqkeo.mongodb.net/cards?retryWrites=true&w=majority")
.then(() =>{
    console.log('Connect to DB')
})
.catch(() =>{
    console.log("Connection fail to DB")
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE , OPTIONS"
    );
    next();
    });


app.post("/api/cards",(req,res,next)=>{
    const card=new Card({
        title:req.body.title,
        description: req.body.description,
        extras:req.body.extras,
        continueUrl:req.body.continueUrl,        
        order:req.body.order
    })
    card.save().then(createdCard=>{
        res.status(201).json({cardId:createdCard._id})
    })

})

app.get("/api/cards", (req, res, next) => {
    Card.find().sort({order:1}).then((docs) => {
      res.status(200).json({
        cards: docs,
      });
    });
  });
  

app.delete("/api/cards/:id",(req,res,next) =>{
    Card.deleteOne({_id: req.params.id}).then(result =>{
        res.status(200).json();
    })
})

app.put("/api/cards/:id" , (req,res,next) =>{
    
    const card = new Card({
        _id:req.body.id,
        title:req.body.title,
        description: req.body.description,
        extras:req.body.extras,
        continueUrl:req.body.continueUrl,
        order:req.body.order
    })
    Card.updateOne({_id: req.params.id}, card).then((result) =>{
        res.status(200).json()
    })
})

module.exports = app