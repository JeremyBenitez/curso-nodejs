import { readFile } from 'node:fs/promises'
console.log('leyendo el primer archivo...')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('Hacer algo mientras lee el archivo...')

console.log('leyendo el segundo archivo...')
const secondText = await readFile('./archivo2.txt', 'utf-8')

console.log('segundo texto:', secondText)
