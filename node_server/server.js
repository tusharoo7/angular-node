var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'matrix',
  database : 'crud_node'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.get('/', function (req, res) {
    res.send('Hello World');
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 app.post('/dologin', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        username:req.body.username,
        password:req.body.password
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })