const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  // Send a message to the client
  socket.write('Hello, Client!\r\n');

  // Handle incoming data from the client
  socket.on('data', (data) => {
    console.log('Received from client:', data.toString());
  });

  // Handle client disconnect
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
