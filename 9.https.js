const http = require('node:http')
//const { findAvailablePort } = require('./10.free-port.js')
const desiredPort = process.env.PORT ?? 3000//indicando que este sera el puerto de desarrollo
//creacion de un servidor local de node, este se manje bajo un requerimiento (req), y una respuesta (res)
const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200 //ok
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('hola mundo, bienvenido a la página de inicio')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})
//con nodemon  puedes ver las peticiones que hace tu servidor, y cambios que hagas en tu proyecto
