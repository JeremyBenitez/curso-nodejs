const http = require('node:http')
const {findAvailablePort} = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000//indicando que este sera el puerto de desarrollo

//creacion de un servidor local de node, este se manje bajo un requerimiento (req), y una respuesta (res)
const server = http.createServer((req, res) =>{
 console.log('request received')
 res.end('hola mundo')   
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`)
    })
})