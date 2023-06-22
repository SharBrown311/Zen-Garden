const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const morgan = require("morgan")
  // const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
  
  const app = express();
  app.use(morgan('dev'))
  app.use(express.static(path.join(__dirname, "client", "build")))

  //CONNECTION TO MONGODB
  mongoose.set('strictQuery', true);
  mongoose.connect(
    "mongodb+srv://sbsharonbrown311:OjCCcfJzKrbyVK2r@cluster0.iu8evru.mongodb.net/portfolio"
    ,() => console.log("Mongoose Connected to DB"))
  
  
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(bodyParser.json());
  app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "Unauthorized-Error"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client" , "build", "index.html"));
  });
  
  app.listen(port, () => {
    console.log("Listening on " + port);
  });
  