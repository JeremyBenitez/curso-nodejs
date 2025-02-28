import { platform, release, arch, cpus, totalmem, freemem, uptime } from 'node:os' // ==> importa ficheros para acceder a sistema

console.log('Informacion del sistema operativo:')
console.log('------------------')

console.log('nombre del sistema operativo', platform())
console.log('nombre del sistema operativo', release())
console.log('arquitectura', arch())
console.log('CPUs', cpus()) 
console.log('memoria total', totalmem() / 1024 / 1024) 
console.log('memoria libre', freemem() / 1024 / 1024) 
console.log('uptime', uptime() / 60 / 60)

