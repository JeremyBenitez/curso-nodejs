import { statSync } from 'node:fs' // los prefijos son impórtantes nombrarlos despues del node:""

const stats = statSync('./archivo.txt')

console.log(
  stats.isFile(),//si es un fichero
  stats.isDirectory(),// si es un directorio
  stats.isSymbolicLink(),//si es un enlace simbolico
  stats.size // tamaño en bytes
)