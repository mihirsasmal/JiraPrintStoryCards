var express = require('express');
var app = express();
const router = express.Router();

app.use(express.static(__dirname + '/client/dist/'));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
  });

  app.listen(3000, ()=>{console.log('Testing on 3000')});