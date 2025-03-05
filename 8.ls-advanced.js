const fs = require('node:fs/promises');
const path = require('node:path');
const picocolors = require('picocolors')   //es una libreria de npm que permite dar colores en la terminal y un formato

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;
    try {
        files = await fs.readdir(folder);
    } catch (err) {
        console.error(picocolors.red(`No se ha podido leer el directorio ${folder}:`, err));
        process.exit(1);
    }
    const filesPromises = files.map(async file => {
        const filepath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filepath); // stat = status - información de archivo
        } catch (err) {
            console.error(`No se pudo obtener información del archivo ${file}:`, err);
            process.exit(1);
        }
        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleDateString();
        return `${picocolors.magenta(fileType)} ${picocolors.blue(file.padEnd(20))} ${picocolors.green(fileSize).toString()}.padStart(10) ${picocolors.bgCyan(fileModified)}`;
    });

    const filesInfo = await Promise.all(filesPromises);

    filesInfo.forEach(info => console.log(info));
}

ls(folder);
