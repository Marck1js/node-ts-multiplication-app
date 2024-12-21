import { writeFileSync, mkdirSync } from 'fs'
import { yarg } from './config/plugins/yargs.plugin';

const { b: n, l, s: showTable } = yarg;

let outputMessage: string = '';

const text = `=============================
         Tabla de ${n}
=============================
`

for (let i = 1; i <= l; i++) {
    outputMessage += `${n} x ${i} = ${n * i}\n`
}

outputMessage = text + outputMessage

if (showTable) console.log(outputMessage)

const outputPath = `outputs`

mkdirSync(outputPath, { recursive: true })
writeFileSync(`${outputPath}/tabla.txt`, outputMessage, 'utf-8')
console.log('File Created sucessfully')