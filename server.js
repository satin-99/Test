const axios = require("axios");
const express = require("express");
var app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

const handlebars = require("express-handlebars");

app.engine(".hbs",handlebars({extname: ".hbs"}));

app.set("PORT",PORT);

// app.use(express.static(path.join(__dirname,'assets')));
// app.set("views",path.join(__dirname,'views'));

app.use(express.static(__dirname + '/views') );
app.set('view engine', "hbs");

// app.set('view engine', ".hbs");

app.get('/', function(req,res) {

  c = req.query.country;
  if(c==undefined) {
    c='IN'
  }
  console.log(c);
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs,c:c});
    })
    .catch(function(error) {

    });
});

app.get('/business', function(req,res) {
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=business&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs});
    })
    .catch(function(error) {

    });
});

app.get('/entertainment', function(req,res) {
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=entertainment&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs});
    })
    .catch(function(error) {

    });
});

app.get('/general', function(req,res) {
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=general&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs});
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.get('/health', function(req,res) {
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=health&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs});
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.get('/science', function(req,res) {
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=science&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs});
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.get('/sports', function(req,res) {
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=sports&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs});
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.get('/technology', function(req,res) {
    let url = `https://newsapi.org/v2/top-headlines?country=${c}&category=technology&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs});
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.get('/search', function(req,res) {
  query = req.query.name;
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=541b0fef5bc14758b3a93b5970586323`
    axios({
      method:'get',
      url
    })
    .then(function(response){
      let jobs = response.data.articles;
      res.render("TheOne",{jobs:jobs});
    })
    .catch(function(error) {
      console.log(error);
    });
});


app.listen(app.get('PORT'), function() {
    console.log('Server is up at port '+ app.get('PORT') + ".");
});
