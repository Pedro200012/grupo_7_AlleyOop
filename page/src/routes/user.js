
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const controller = require("../controllers/user");
const validLoggin = require("../middlewares/validLoggin");
const validLogin = require("../middlewares/validLoggin");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,"../../public/images","avatar"))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });
  let upload = multer({ storage: storage })
  
  router.get("/login" ,validLoggin, controller.login)
  router.get("/register" ,validLoggin,controller.register)

  router.post("/access",controller.access)

  module.exports = router