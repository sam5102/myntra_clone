// import * as http from 'http';
var http = require('http');

let server = http.createServer((req, res) => {
    res.write('<h1>Welcome all!</h1>')
    res.end()
})

server.listen(2400);