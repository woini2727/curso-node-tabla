const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Mostrar en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Limite de la base'      
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                      throw 'la base tiene que ser un number';
                    }
                    return true;
                })
                .argv;

module.exports = argv;