// import Express from 'express';
// var Express = require('express');


// export class Server {
//   app = Express();

//   startup() {
//     this.setupRoutes();

//     this.app.listen(3000, () => console.log("Listening..."));
//   }

//   setupRoutes() {
//     this.app.get("/teste", (req, res) => {
//       res.send("Funcionando :)");
//     });
//   }
// }

// const server = new Server();
// server.startup();

console.log('node server with express');


var express = require('express');
var app = express();

app.use('/', (req, res) => {
  res.status(200).send('La API funciona correctamente333w \n');
});

app.listen(3000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

module.exports = "asdasdasd";

exports.wtf = "wtf";
