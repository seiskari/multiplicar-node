// require
const fs = require('fs');
var colors = require('colors');

const listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.green);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`.bgRed);
            return;
        }
        console.log(limite);
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`.green);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}