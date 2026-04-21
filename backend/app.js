const http = require('http')

const PORT = process.env.BACKEND_PORT || 8080
const RESPONSE_TEXT = 'Hello from Effective Mobile!'

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(RESPONSE_TEXT)
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})
