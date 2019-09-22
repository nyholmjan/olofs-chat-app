import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io'
import * as path from 'path'

const app = express();

app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

const server = http.createServer(app);
const io = socketIo(server);

const history: Array<string> = [];

io.on('connection', (socket: any) => {
  for (let message of history) {
    socket.emit('message', message)
  }
  socket.on('message', (message: string) => {
    history.push(message);
    io.emit('message', message);
    console.log('received: %s', JSON.stringify(message));
  });
  socket.on('disconnect', () => {
    console.log('disconnected')
  })
});

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
