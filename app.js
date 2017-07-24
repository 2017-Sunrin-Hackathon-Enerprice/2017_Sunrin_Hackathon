var express = require('express')
var app = express()
var port = process.env.PORT||3000

app.listen(port, (err)=>{
    if(err){
        console.log('Server Start Error')
    }
    else {
        console.log('Server Running At '+port+' Port!')
    }
})