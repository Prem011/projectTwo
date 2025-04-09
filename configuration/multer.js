const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/studentDp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + path.extname(file.originalname) + '-' + Date.now())
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload; 