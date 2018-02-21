var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var location = require('../models/location.js');
var jwt = require('jsonwebtoken');

var User = require('../models/user')


/* Get all locations */
router.get('/', function (req, res, next) {
  location.find()
  .populate('user','_id')
  .exec(function (err, locations) {
    if (err) return next(err);
    res.json(locations);
  });
});

/* Get single location by id */
router.get('/:id', function (req, res, next) {
  location.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.use('/', function (req, res, next) {
  jwt.verify(req.query.token, 'secret', function (err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not authenticated',
        error: err
      });
    }
    next();
  })
});


/* Save location */
router.post('/', function (req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function (err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    var loc = new location({
      title: req.body.title,
      description: req.body.description,
      user: user
    });
    loc.save(function (err, post) {
      if (err) { 
        return next(err);
      }
      user.locations.push(post);
      user.save();
      res.json(post);
    });
  });
});

/* Update location */
router.put('/:id', function (req, res, next) {
  location.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete location */
router.delete('/:id', function (req, res, next) {
  location.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
