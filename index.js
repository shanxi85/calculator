var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('home');

});


app.listen(8080);
console.log('8080 is the magic port');
