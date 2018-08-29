const fs = require("fs");
const mockfs = require("mock-fs");

describe("hli api", () => {
  const root = fs.realpathSync(process.cwd());
  const hli = require(root);

  describe("#constructor (language) ~ toml", () => {
    const input = "content/**";
    const output = "public/lunr.json";
    const language = "toml";
    const delimiter = "+++";
    let Indexer;

    beforeAll(() => {
      process.chdir(root);

      mockfs({ "public/lunr.json": mockfs.file() });
      Indexer = new hli();
      Indexer.index(); // null, null, "toml", null
      mockfs.restore();
    });

    it("should set `input` property", () => {
      expect(Indexer.input).toEqual(input);
    });

    it("should set `output` property", () => {
      expect(Indexer.output).toEqual(output);
    });

    it("should set `language` property", () => {
      expect(Indexer.language).toEqual(language);
    });

    it("should set `delimiter` property", () => {
      expect(Indexer.delimiter).toEqual(delimiter);
    });
  });

  describe("#constructor (language) ~ yaml", () => {
    const input = "content/**";
    const output = "public/lunr.json";
    const language = "yaml";
    const delimiter = "---";
    let Indexer;

    beforeAll(() => {
      process.chdir(root);

      mockfs({ "public/lunr.json": mockfs.file() });
      Indexer = new hli();
      Indexer.index(null, null, "yaml", null);
      mockfs.restore();
    });

    it("should set `input` property", () => {
      expect(Indexer.input).toEqual(input);
    });

    it("should set `output` property", () => {
      expect(Indexer.output).toEqual(output);
    });

    it("should set `language` property", () => {
      expect(Indexer.language).toEqual(language);
    });

    it("should set `delimiter` property", () => {
      expect(Indexer.delimiter).toEqual(delimiter);
    });
  });

  describe("#constructor (input, output, language, delimiter)", () => {
    const input = "content/test-yaml.md";
    const output = "public/lunr-api-constructor-all.json";
    const language = "yaml";
    const delimiter = "---";
    let Indexer;

    beforeAll(() => {
      process.chdir(root);

      Indexer = new hli();
      Indexer.index(input, output, language, delimiter);
    });

    it("should set `input` property", () => {
      expect(Indexer.input).toEqual(input);
    });

    it("should set `output` property", () => {
      expect(Indexer.output).toEqual(output);
    });

    it("should set `language` property", () => {
      expect(Indexer.language).toEqual(language);
    });

    it("should set `delimiter` property", () => {
      expect(Indexer.delimiter).toEqual(delimiter);
    });
  });

  describe("#setters (input, output, language, delimiter) ~ toml", () => {
    const input = "content/test-toml.md";
    const output = "public/lunr-api-setters-toml.json";
    const language = "toml";
    const delimiter = "+++";
    let Indexer;

    beforeAll(() => {
      process.chdir(root);

      Indexer = new hli();
      Indexer.setInput(input);
      Indexer.setOutput(output);
      Indexer.setLanguage(language);
      Indexer.setDelimiter(delimiter);
      Indexer.index();
    });

    it("should set `input` property", () => {
      expect(Indexer.input).toEqual(input);
    });

    it("should set `output` property", () => {
      expect(Indexer.output).toEqual(output);
    });

    it("should set `language` property", () => {
      expect(Indexer.language).toEqual(language);
    });

    it("should set `delimiter` property", () => {
      expect(Indexer.delimiter).toEqual(delimiter);
    });
  });

  describe("#setters (input, output, language, delimiter) ~ yaml", () => {
    const input = "content/test-yaml.md";
    const output = "public/lunr-api-setters-yaml.json";
    const language = "yaml";
    const delimiter = "---";
    let Indexer;

    beforeAll(() => {
      process.chdir(root);

      Indexer = new hli();
      Indexer.setInput(input);
      Indexer.setOutput(output);
      Indexer.setLanguage(language);
      Indexer.setDelimiter(delimiter);
      Indexer.index();
    });

    it("should set `input` property", () => {
      expect(Indexer.input).toEqual(input);
    });

    it("should set `output` property", () => {
      expect(Indexer.output).toEqual(output);
    });

    it("should set `language` property", () => {
      expect(Indexer.language).toEqual(language);
    });

    it("should set `delimiter` property", () => {
      expect(Indexer.delimiter).toEqual(delimiter);
    });
  });
});
