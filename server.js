const express = require("express")
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const {expressjwt} = require('express-jwt')
const path = require("path")
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))


//CONNECTION TO MONGODB
mongoose.set('strictQuery', true);
mongoose.connect(
`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.iu8evru.mongodb.net/portfolio`
  ,() => console.log("Mongoose Connected to DB"))



app.use("/api", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))






//middleware error handler
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})