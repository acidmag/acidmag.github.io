const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const mongojs = require('mongojs');
const db = mongojs('mongodb://Siddhant:slrrnn123@ds115671.mlab.com:15671/aciddot_db', ['articles']);

const User = require('../models/user');

// Register User
router.post('/users/register', (req, res, next) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
      if(err) {
        res.json({success: false, message: "Failed to register user"});
      } else {
        res.json({success: true, message:"User registered"});
      }
    })
});

// Authenticate User
router.post('/users/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
      if(err) throw err;

      if(!user) {
        return res.json({success:false, message: 'User not found'});
      }

      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;

        if(isMatch) {
          const token = jwt.sign(user, config.secret, {
            expiresIn: 604800 //One week
          });

          res.json({
            success: true,
            token: 'JWT ' + token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              username: user.username
            }
          })
        } else {
          res.json({success: false, message: "Wrong Password"});
        }
      });
    });
});

//User Profile
router.get('/users/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

// declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// // Get all users
// router.get('/users', (req, res) => {
//   // Get posts from the mock api
//   // This should ideally be replaced with a service that connects to MongoDB
//   axios.get(`${API}/users`)
//     .then(users => {
//       res.status(200).json(users.data);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     });
// });

// Get All Articles
router.get('/articles', (req, res) => {
  db.articles.find(function(err, articles){
    if(err){
      res.send(err);
    }
    res.json(articles);
  });
});


// Get single Article
router.get('/article/:id', (req, res) => {
  db.articles.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, article){
    if(err){
      res.send(err);
    }
    res.json(article);
  });
});

// // Save an Article
router.post('/article', (req, res) => {
  var article = req.body;

  if(!article) {
    res.status(400);
    res.json({
      "message": "No Data"
    });
  } else {
    db.articles.save(article, function(err, article){
      if(err){
        res.send(err);
      }
      res.json(article);
    });
  }
});

//Delete an article
router.delete('/article/:id', (req, res) => {
  db.articles.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, article){
    if(err){
      res.send(err);
    }
    res.json(article);
  });
});


//Update an Article
router.put('/article/:id', (req, res) => {
  var article = req.body;
  var updatedArticle = {};

  if (article.title) {
    updatedArticle.title = article.title;
  }

  if (article.tagline) {
    updatedArticle.tagline = article.tagline;
  }

  if (article.article) {
    updatedArticle.article = article.article;
  }

  if(!updatedArticle) {
    res.status(400);
    res.json({
      "message": "No updates"
    });
  } else {
    db.articles.update({_id: mongojs.ObjectId(req.params.id)}, updatedArticle, {}, function(err, article){
      if(err){
        res.send(err);
      }
      res.json(article);
    });
  }
});

module.exports = router;
