import fs from "fs";
import { SaveFile } from "./save-file.use-case";

describe("SafeFileUseCase", () => {
  afterEach(() => {
    fs.existsSync("custom-outputs/file-destination/custom-table-name.txt") &&
      fs.rmSync("custom-outputs", { recursive: true });

    fs.existsSync("outputs/table.txt") &&
      fs.rmSync("outputs", { recursive: true });
  });

  const options = {
    fileContent: "custom content",
    fileDestination: "custom-outputs/file-destination",
    fileName: "custom-table-name",
  };

  test("Should save file with default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "This is a Jest Content",
    };

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test("Should save file with custom values", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(options);
    const fileExist = fs.existsSync(
      `${options.fileDestination}/${options.fileName}.txt`
    );
    const fileContent = fs.readFileSync(
      `${options.fileDestination}/${options.fileName}.txt`,
      { encoding: "utf-8" }
    );
    console.log(result);
    expect(result).toBe(true);
    expect(fileExist).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  test("Should return false if directory could not be created", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("This is a custom error message from testing");
    });
    const result = saveFile.execute(options);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test("Should return false if file could not be created", () => {
    const saveFile = new SaveFile();

    const writeFileSync = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("This is a custom writing error message");
      });

    const result = saveFile.execute({ fileContent: "Hola que tal." });

    expect(result).toBe(false);

    writeFileSync.mockRestore();
  });
});
