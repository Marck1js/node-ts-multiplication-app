// import {yarg} from './yargs.plugin'

const runCommand = async (argv: string[]) => {
  process.argv = [...process.argv, ...argv];

  const { yarg } = await import("./yargs.plugin");

  return yarg;
};

describe("Test yargs.plugin.ts", () => {
    const originalArgv = process.argv;

    beforeEach(()=> {
        process.argv = originalArgv;
        jest.resetModules();
    });

    test("should return true ", async () => {
    // expect(true).toBe(true)
    const argv = await runCommand(["-b", "2"]);
  
    expect(argv).toEqual(
      expect.objectContaining({
        b: 2,
        l: 10,
        s: false,
        n: "table",
        d: "outputs",
      })
    );
  });

    test('Should return configuration with custom values', async () => {

        const argv = await runCommand(['-b', '20', '-l', '5', '-s', '-n', 'custom-table', '-d', 'custom-outputs']);

        expect(argv).toEqual(
            expect.objectContaining({
                b: 20,
                l: 5,
                s: true,
                n: 'custom-table',
                d: 'custom-outputs'
            })
        );


    });
        
});
