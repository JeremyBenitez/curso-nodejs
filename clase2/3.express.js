const ditto = require('./Pokemon/ditto.json')
const express = require('express')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')//esto evita mostrar informacion acerca de la version del framework usado

//aqui estoy creando un middleware, esta se usa para valdiar datos de la request que este realizando el usuario, se ejecuta antes de que este haga la peticion

app.use((req, res, next) => {
if (req.method ===  'post') return next()
   if (req.headers ['content-type'] === 'application/json') return next()
 
 //solo llegan request que son POST y que tienen el header Content-type: application/json
    next() 
})

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)

})

app.post('/pokemon', (req, res) => {
    let body = ''

    req.on('data', chunk => {
        body = chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        //mutar la request y meter la informacion en el req.dody
        req.body = data
        next()
    })
})
//ultima notificacion a la que llegara en determinado caso
app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log('server listening on port http://localhost:${PORT}')
})

//al usar framworks como express, este se nombra en las cabecera de extenciones como thunder client