/** src/server.js */
const app = require('./index.js')
const http = require('http')


const httpServer = http.createServer(app);
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));





