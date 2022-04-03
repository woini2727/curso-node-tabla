//const { argv, options } = require('yargs');
const {crearArchivo} = require ('./Helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log(argv);
//console.log(colors.blue("hasta: yargs"), argv.h);


crearArchivo(argv.base,argv.l,argv.h).then((nombreArchivo) => {
    console.log(colors.bgRed(nombreArchivo,'creado'))
}).catch((err) => {
    console.log(err);
});
