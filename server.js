// 1- import express
const express = require('express');
const connectDb = require('./config/connectDb');
require("dotenv").config()
const route = require('./routes/contact.routes')
//2-init the APP
const app = express();

// 3- create a port 
PORT = process.env.PORT||4109;
connectDb()
app.use(express.json());
// 4- create a server
app.listen(PORT, ()=>console.log(`server listening on port ${PORT}`)); 
app.use("/api/contact",route)