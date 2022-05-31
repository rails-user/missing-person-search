"use strict";

const express = require('express');
const router = express.Router();

const logger = require('../logger');
logger.setLogger();

//const auth = require('../auth/auth.js');

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */
  missingPersonRoutes = require("./missingPersonRoutes")
  userRoutes = require("./userRoutes")

/*   subscriberRoutes = require("./subscriberRoutes"),
  courseRoutes = require("./courseRoutes"), */
  //errorRoutes = require("./errorRoutes"),
  //homeRoutes = require("./homeRoutes");

  router.use("/missing-person", missingPersonRoutes);
router.use("/users", userRoutes);
/* router.use("/subscribers", subscriberRoutes);
router.use("/courses", courseRoutes); */


//router.use("/", homeRoutes);
//router.use("/", errorRoutes);

module.exports = router;
