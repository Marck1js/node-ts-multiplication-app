export interface CreateTableUseCase {
    execute: (option: CreateTableOptions) => string
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
    showTable?: boolean;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        /***
         *  DI - Dependency Injection
         */
    ) { }

    execute({ base, limit = 10 }: CreateTableOptions) {
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}`
            if( i < limit ) outputMessage+='\n'

        }

        return outputMessage
    }


}
