var express = require('express')
var request = require("request");
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()
var afterload = require('after-load')
var port = process.env.PORT||3000
var db = require('./mongo/database')
var node_xj = require("xls-to-json");

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

//require('./routes/auth')()
//require('./routes/dataset')(fs, db)
require('./routes/api')(app, request, db)
require('./routes/find')(app, db)

app.listen(port, (err)=>{
    if(err){
        console.log('Server Start Error')
    }
    else {
        console.log('Server Running At '+port+' Port!')
    }
})

function set() {
    node_xj({
        input: "refus.xls",
        output: "refus.json",
        sheet: ""
    }, (err, result)=>{
        if(err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
}