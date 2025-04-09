const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/projectTwoDb")
  .then(() => {
    console.log("connected to database successfully!")   
  })
  .catch((err) => {
    console.log("Error connecting to database : ", err)
  })