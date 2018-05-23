"use strict"

var http = require('http');

let nodePong = require('node-pong');
let serverMessage = 'Server is running';
let port = 8001;

let server = http.createServer(processServer).listen(port);

function processServer(req, res) {
    if (req.url.indexOf('/') > -1) {
        res.setHeader('Accept-Charset', 'utf-8');
        res.setHeader('endpoint', '/ping');
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Simple service</title></head><body><h1>The simple service is running.</h1></body></html>');
    }
    res.end();
}

//onsole.log('server is running');
console.log(serverMessage + port);