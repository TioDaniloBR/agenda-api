var express = require('express');
var app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log("Server started at 3000");
})

app.get('/', (req, res) => {
    res.send('hello world')
});