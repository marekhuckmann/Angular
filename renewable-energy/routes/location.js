var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var location = require('../models/location.js');

/* Get all locations */
router.get('/', function(req, res, next) {
  location.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Get single location by id */
router.get('/:id', function(req, res, next) {
  location.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Save location */
router.post('/', function(req, res, next) {
  location.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update location */
router.put('/:id', function(req, res, next) {
  location.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete location */
router.delete('/:id', function(req, res, next) {
  location.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;