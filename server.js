let express = require('express');

let app = express();

let server = require('http').createServer(app);

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html');
} )

server.listen(process.env.port || 3000);
console.log('server is runngin on port 3000');