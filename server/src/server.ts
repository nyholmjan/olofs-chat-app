import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io'
import * as path from 'path'
import db from './db'

const app = express();

app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket: any) => {
  let connection = {
    id: socket.id,
    user: ''
  }
  db.any('SELECT message, user_name AS "userName", channel, timestamp FROM messages;').then(messages => {
    for (let message of messages) {
      socket.emit('message', message)
    }
  }).catch(error => console.log(error))

  socket.on('message', (message: any) => {
    db.none('INSERT INTO messages(message, user_name, channel, timestamp) VALUES($/message/, ${userName}, $/channel/, now())', {
      message: message.message,
      userName: message.userName,
      channel: message.channel
    })
    connection.user = message.userName
    io.emit('message', message);
    console.log('received:', message);
  });
  socket.on('disconnect', () => {
    console.log('disconnected')
  })
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
