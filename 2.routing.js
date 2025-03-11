const http = require('node:http');
// const { findAvailablePort } = require('./10.free-port.js');
// Creación de un servidor local de Node, este se maneja bajo un requerimiento (req) y una respuesta (res)
const dittoJSON = require('./clase2/Pokemon/ditto.json');

const processRequest = (req, res) => {
    const { method, url } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-type', 'application/json; charset=urf-8')
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end('<h1>404</h1>')
            }


        case 'POST':
            switch (url) {
                case '/pokemon': {
                   let body = ''
                    //escuchar evento data

                    req.on('data', chunk => {
                        body = chunk.toString(  )
                    })
                    
                    req.on('end', () =>{
                        const data = JSON.parse(body)
                        //llamar a una base de datos
                        res.end(JSON.stringify(data))
                        res.writeHead(201, { 'content-type': 'application/json; charset=utf-8'})
                        data.timestamp = Date.now()
                    })
                    break
                }


                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end('<h1>404</h1>')
            };
    }
}
const server = http.createServer(processRequest);

server.listen(PORT, () => {
    console.log(`server listening on port http://localhost:1234`);
});
// Con nodemon puedes ver las peticiones que hace tu servidor y los cambios que hagas en tu proyecto
