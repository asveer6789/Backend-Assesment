const express=require("express");
const dotenv=require("dotenv").config();  
const connectDB = require ("./config/dbConnection");

connectDB();
const app=express();
port= 3000;

//paresing data from client
app.use(express.json());

// this route will insert customers ,order , product data into their respetive table
app.use('/api/insertInformation', require('./routes/contactRoutes'));

//app.use('',require('./routes/revenueCalculations'))



app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})