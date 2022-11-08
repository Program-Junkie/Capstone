
var express = require('express'),
  app = express(),
  http = require('http'),
  socketIO = require('socket.io'),
  server, io;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server = http.Server(app);
server.listen(3000, () => {
  console.log('listening on *:3000');
});
io = socketIO(server);

io.on('connection', (socket) => {

  socket.emit('greeting-from-server', {
    greeting: 'Hello Client '
    });
    console.log('a user connected');
  


  socket.on("greeting-from-client", function (message) {
    console.log(message);
  });

});


