const net = require('net');

const client = new net.Socket();

client.connect(3000, '127.0.0.1', () => {
  console.log('Connected to server');
});

client.on('data', (data) => {
  console.log('Received from server:', data.toString());
  // Send a response to the server
  client.write('Hello, Server!\r\n');
});

client.on('close', () => {
  console.log('Connection closed');
});
