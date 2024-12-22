export const checkOptions = (argv:any, options:any) => {
    if(argv.b < 1) throw 'Error: -b --base must be greater than 0;'

    return true;
}