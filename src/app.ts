import { yarg } from '../src/config/plugins/yargs.plugin'
import { ServerApp } from './presentacion/serverApp';

// console.log(process.argv)
// console.log(yarg)


(async () => {
    await main();
})()

async function main() {
    const { b: base, l: limit, s: showTable, d: fileDestination, n: fileName } = yarg
    console.log({yarg})
    ServerApp.run({ base, limit, showTable, fileName, fileDestination })
}