import fs from 'fs';
export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    name?: string;
    destination?: string;
}


export class SaveFile implements SaveFileUseCase {

    constructor(
        /**repository: StorageRepository */

    ) { }


    execute({ fileContent, destination, name }: Options): boolean {
        try {
            fs.mkdirSync(`${destination}`, { recursive: true })
            fs.writeFileSync(`${destination}/${name}.txt`, fileContent, 'utf-8')
            return true;

        } catch (error) {
            console.error(error)
            return false;

        }


    }


    // };

}