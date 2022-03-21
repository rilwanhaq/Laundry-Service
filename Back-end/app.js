const express = require('express');
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// SECRET = "RESTAPI"

const app = express(); // create a new express application


//Initializing the Routes
const orderRoutes = require('.//routes//orders');




// Connecting to the database using mongoose
const MONGO_URI = "mongodb+srv://laundryService:RGrFAtVdjsDeNIxq@mydatabase.xwidf.mongodb.net/laundryData?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI)
    .then(()=>{console.log("Connected to database")}).catch((err)=>{
    console.log(err.message);
});

//Authorization


//connecting to the server
app.listen(process.env.PORT || 3000,()=>{  // bind the connections on this port and listen to it
    console.log(`laundry service listening on ${3000}`);
})