import { ServerApp } from "./serverApp";

describe("ServerApp", () => {
  test("Should create ServerApp instance", () => {

    const serverApp = new ServerApp();
    
    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
 
});
});
