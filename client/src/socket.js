const io = require('socket.io')();

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('message', (data) => {
    console.log(`Received message from client: ${data}`);
    io.emit('message', data);
  });
});

io.listen(3000);
