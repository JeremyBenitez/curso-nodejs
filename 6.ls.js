//listar los archivos que estan en el directorio actual
import { readdir } from 'node:fs';
readdir('.', (err, files) => {
    if (err) {
        console.log('Error al leer directorio: ', err)
        return;
    }
    files.forEach(file => {
        console.log(file)
    })
})
