var http = require('http');
var moment = require('moment');

const manager = {
    name: 'bos',
    age: 37
}
/**
 * Feature Comment
 */
const empl2 = {
    name: 'Doe Vasile',
    age: 34
}

const textHeader = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' }
const jsonHeader = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' , 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}

http.createServer(function (req, res) {
    const url = req.url;
    console.log(`called page ${url} at moment: ` + moment().format());
    switch (url) {
        case '/managers':
            res.writeHead(200, jsonHeader);
            res.end(JSON.stringify(manager));
            break;
        case '/employees':
            res.writeHead(200, jsonHeader);
            res.end(JSON.stringify([empl1, empl2]));
            break;
        default:
            res.writeHead(404, textHeader);
            res.end('Page not found!');
    }
    res.writeHead(200, textHeader);
}).listen(8080);
