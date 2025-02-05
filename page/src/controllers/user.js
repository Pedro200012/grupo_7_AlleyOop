const userModel = require("../models/user");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = {
    login:(req,res) => 
    {
        res.render("users/login",{styles:"login.css"})
    },
    register:(req,res) => res.render("users/register",{styles:"login.css"}),
    access: (req,res) => {
        let userToLogin = userModel.findByEmail(req.body.email)
        if(userToLogin) {
            let passwordHash = bcrypt.compareSync(req.body.password, userToLogin.password)
            if(passwordHash){
                req.session.userLogged = userToLogin
                
                if(req.body.rememeber_user){
                    res.cookie('userEmail', req.body.email, {maxAge : 1000* 60 *60 * 24 * 4 })
                }
                return res.redirect('/')
            }
            return res.render('users/login', {
                errors: {
                    password : {
                        msg: 'La contraseña es incorrecta'
                    }
                }, styles:"login.css"
        })
        }
        return res.render('users/login', {
                errors: {
                    email:{
                        msg: 'Las credenciales son Invalidas'
                    },
                }, styles:"login.css"
        })
    },
    profile:(req,res) => {
        res.render("users/profile",{styles:"profile.css", user: req.session.userLogged})
    },
    update: (req,res) => {
        return res.send(req.body)
        let result = product.update(req.body,req.session.user.id)
        return result ? res.redirect("/profile") : res.status(500).send("Error en la carga") 
    },    
    logout: (req,res) =>{
        req.session.destroy();
        res.clearCookie('userEmail')
        return res.redirect("/")
    }
  }
