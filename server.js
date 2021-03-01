const express = require('express');
const port = process.env.PORT || 5000;
const server = express();
const path = require('path');

server.use('/', express.static(path.join(__dirname, 'public')));
server.use('/assets', express.static(path.join(__dirname, '/public/assets')));

server.get('/', function (req, res) {
    res.sendFile(__dirname+ '/public/index.html')
})

server.listen (port, (err)=> {
    if(err) {
        console.log('sorry we have some problems')
    }
    console.log(`ok port ${port} działa`)
})