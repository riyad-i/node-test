// import http module from node
const { log } = require('console');
const http = require('http')


const hostname = '127.0.0.1'

const port = '3000'


const server = http.createServer((req, res)=> {
    console.log(req.url);
    console.log(req.method);
    console.log()

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end('Hello World!\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})