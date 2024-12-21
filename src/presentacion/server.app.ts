import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/sava-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}


export class ServerApp {


    static run({ base, limit, showTable, name, destination }: RunOptions) {
        console.log('Server running...')
        const table = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                destination,
                name
            });

        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('File Created sucessfully')
            : console.log('Error creating file')
    }
} 