const config = require("../config/db");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password,
    savedNews: []
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: "Failed to register User"
      });
    } else {
      res.json({
        success: true,
        msg: "User registered"
      });
    }
  });
});

router.post("/authenticate", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({
        success: false,
        msg: "User not found"
      });
    } else {
      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err){
          res.json({
            success: false,
            msg: err
          });
        }
        if (isMatch) {
          let token = jwt.sign({data:user}, config.secret, {
            expiresIn: 604800
          });

          res.json({
            success: true,
            token: "bearer " + token,
            user:{
                id: user._id,
                username: user.username,
                savedNews: user.savedNews
            }
          });
        }else{
            res.json({
                success: false,
                msg: "Wrong password"
            });
        }
      });
    }
  });
});

module.exports = router;