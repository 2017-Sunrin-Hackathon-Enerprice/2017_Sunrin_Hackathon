var express = require('express')
var request = require("request");
var bodyParser = require('body-parser')
var node_xj = require("xls-to-json");
var passport = require('passport')
var FacebookStrategy = require('passport-facebook')
var app = express()
var port = process.env.PORT||3000
var db = require('./mongo/database')

app.use(bodyParser.urlencoded({
    extended : false
}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

require('./routes/exel')
require('./routes/auth')
require('./routes/facebook')(app, db, passport, FacebookStrategy)
require('./routes/api')(app, request)

app.listen(port, (err)=>{
    if(err){
        console.log('Server Start Error')
    }
    else {
        console.log('Server Running At '+port+' Port!')
    }
})

