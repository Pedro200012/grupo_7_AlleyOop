const express = require('express');
const router = express.Router();
const path = require('path');



router.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "index.html")))
router.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "login.html")))
router.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "register.html")))
router.get("/productDetail", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productDetail.html")))
router.get("/productCart", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productCart.html")))
router.get("/productCartDos", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productCartDos.html")))
router.get("/productCartTres", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productCartTres.html")))
router.get("/contacto", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "contacto.html")))
router.get("/quienesSomos", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "quienesSomos.html")))
router.get("/tienda", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "tienda.html")))

module.exports = router