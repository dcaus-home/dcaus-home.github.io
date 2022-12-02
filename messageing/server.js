const express = require('express');
const app = express();

// Stream Chat server SDK
const StreamChat = require('stream-chat').StreamChat;
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.listen(8800, () => {
  console.log('Example app listening on port 8800!');
});


// [...]

const serverClient = new StreamChat('8drx4ww3gjsx', 'xdpezryetxkt56837qzdwnhnngfsa3dmkwpygahevbju6xdcyrxney6zgw2x9dat');

app.get('/token', (req, res) => {
  const { username } = req.query;
  if (username) {
    const token = serverClient.createToken(username);
    res.status(200).json({ token, status: 'sucess' });
  } else {
    res.status(401).json({ message: 'invalid request', status: 'error' });
  }
});import { StreamChat } from 'stream-chat';

// client-side you initialize the Chat client with your API key
const chatClient = StreamChat.getInstance('8drx4ww3gjsx', {
    timeout: 6000,
});
await chatClient.connectUser(
    {
        id: 'john',
        name: 'John Doe',
        image: 'https://getstream.io/random_svg/?name=John',
    },
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZ3JlZW4taGF0LTYifQ.jqyFV7ReNfVtllMYdDSouBX7kunsaYMuL3t_GW6-01s',
);
await chatClient.disconnectUser();


// [...]
