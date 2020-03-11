var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set(path.resolve("views"));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/api', (req, res) => {
    data = [
        {
        "name": "bioSite",
        "link": "https://bmulhern2.github.io/MichaelMulhernBiography/",
        "image": "images/bioSite.png"
        },
        {
        "name": "web-330",
        "link": "https://github.com/bmulhern2/web-330",
        "image": "images/web-330.png"
        }
    ];
    res.json(data);
})
http.createServer(app).listen(8080, (req, res) => {
    console.log("Application started on Port 8080!");
})