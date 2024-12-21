import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        describe: 'Build the app',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        description: 'Muestra la lista en consola'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        description: 'Muestra la tabla de multiplicacion'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        description: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        description: 'File destination'
    })
    .parseSync()
