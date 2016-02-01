//express import
var express  = require('express');
//initilize express constructor
var app      = express();

//port configuration
var port  	 = process.env.PORT || 8000;

//define the port to use
app.use(express.static(__dirname + '/public'));

//Main Route Sample
app.get('/', function (req, res) {
  res.send('Hello Microservice API !');
});
//call listen method
app.listen(port);
console.log("App listening on port " + port);
