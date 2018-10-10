const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();//init express

//assign a port
const port = process.env.PORT || 3000;

//setup of angular files (similar to setting up a static file)
app.use(express.static(__dirname + '/dist/angular-server'));
//in the docs for body parser middleware
app.use(bodyParser.json());

//methods for REST
app.route('/api/data').get((req, res) => {
  res.send({
      data: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});
app.route('/api/data/:name').get((req, res) => {
  const requestedName = req.params['name'];
  res.send({ name: requestedName });
});
// app.route('/api/data/:name').put((req, res) => {
//   const requestedName = req.params['name'];
//   res.send({ name: requestedName });
// });

//send angular file to path (has to be built)
app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

//server creation
const server = http.createServer(app);

server.listen(port, ()=> console.log('Running...'));
