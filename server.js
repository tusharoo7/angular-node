// node server crated 
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
    let sql ="SELECT * FROM users WHERE status = 'ACTIVE' and username='"+response.username+"' AND password='"+response.password+"'" ;
   // console.log(response);
   var query = connection.query(sql, function (err, results) {
    //var rows = JSON.parse(JSON.stringify(results[0]));
      if (err) 
      {
        var serverrespone = {
                              "responseData":{},
                              "responseStatus":{
                                                "STATUS":"FAILED",
                                                "MESSAGE": "Invalid input",
                                                "STATUSCODE": "300"

                                              }
                              ,"extraData":[]
                            }
      }
      else
      {console.log(results.length)
        if(results.length>0)
        {
          var rows = JSON.parse(JSON.stringify(results[0]));
          var serverrespone = {
                                  "responseData":{
                                    "created_at":rows.created_at,
                                    "email":rows.email,
                                    "f_name":rows.f_name,
                                    "id":rows.id,
                                    "l_name":rows.l_name,
                                  
                                    "profile_pic":rows.profile_pic,
                                    "status":rows.status,
                                    
                                    "updated_at":rows.updated_at,
                                    "username":rows.username,
                                    },
                                  "responseStatus":{
                                                    "STATUS":"SUCCESS",
                                                    "MESSAGE":"Query successful",
                                                    "STATUSCODE":"200"
                                                  }
                                    ,"extraData":[]
                                }
        }
        else
        {
          var serverrespone = {
            "responseData":{},
            "responseStatus":{
                              "STATUS":"FAILED",
                              "MESSAGE": "Invalid username or password",
                              "STATUSCODE": "205"

                            }
            ,"extraData":[]
          }
        }
        
      }
     // console.log(rows);
      res.end(JSON.stringify(serverrespone));
    });
  //console.log(query.sql);
    
 })
