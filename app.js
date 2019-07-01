const { argv } = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
// let base = 5;
// console.log('process :', process.argv[2]);
// let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

console.log('argv :', argv);