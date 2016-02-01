var express = require("express");
var appRoutes = express.Router();

module.exports = function(app){

  //Main Route Sample
  app.get('/', function (req, res) {
    res.send('Hello Microservice API  !');
  });

  //Microservice API root /
  appRoutes.get('/', function(req, res) {
    res.json({
      message: 'Welcome to your Simple Microservice API!'
    });
  });

  //Microservice Sample Method
  appRoutes.get('/dosomething', function(req, res) {

    res.json({
      message: 'Already Done !'
    });
  });


  //Apply and use created appRoutes
  app.use('/api', appRoutes);



};
