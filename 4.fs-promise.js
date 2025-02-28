import { readFile } from 'node:fs/promises'
console.log('leyendo el primer archivo...')
readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer texto:', text)
    })

console.log('Hacer algo mientras lee el archivo...')

console.log('leyendo el segundo archivo...')
readFile('./archivo2.txt', 'utf-8')
   .then(text => {
    console.log('segundo texto:', text)
   })