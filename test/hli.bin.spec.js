const fs = require("fs");
const assert = require("yeoman-assert");
const shell = require("shelljs");

describe("hli bin", () => {
  const root = fs.realpathSync(process.cwd());

  describe("#hli (-i, -o, -l, -d) ~ yaml", () => {
    let output;

    beforeAll(() => {
      shell.exec(`rm -f "${root}/public/lunr-yaml.json"`);
      shell.exec(`node "${root}/bin/hli.js" -i "${root}/content/test-yaml.md" -o "${root}/public/lunr-yaml.json" -l "yaml" -d '---'`);
      output = require(`${root}/public/lunr-yaml.json`)[0];
    });

    it("should create `output` file", () => {
      assert.file(`${root}/public/lunr-yaml.json`);
    });

    it("should parse the correct `uri` key", () => {
      expect(output.uri).toEqual("/test-yaml");
    });

    it("should parse the correct `title` key", () => {
      expect(output.title).toEqual("YAML test");
    });

    it("should parse the correct `content` key", () => {
      expect(output.content).toEqual("\nYAML content\n");
    });

    it("should parse the correct `tags` key", () => {
      expect(output.tags).toEqual(["yaml1", "yaml2", "yaml3"]);
    });
  });

  describe("#hli (-i, -o, -l, -d) ~ toml", () => {
    let output;

    beforeAll(() => {
      shell.exec(`rm -f "${root}/public/lunr-toml.json"`);
      shell.exec(`node "${root}/bin/hli.js" -i "${root}/content/test-toml.md" -o "${root}/public/lunr-toml.json" -l "toml" -d '+++'`);
      output = require(`${root}/public/lunr-toml.json`)[0];
    });

    it("should create `output` file", () => {
      assert.file(`${root}/public/lunr-toml.json`);
    });

    it("should parse the correct `uri` key", () => {
      expect(output.uri).toEqual("/test-toml");
    });

    it("should parse the correct `title` key", () => {
      expect(output.title).toEqual("TOML test");
    });

    it("should parse the correct `content` key", () => {
      expect(output.content).toEqual("\nTOML content\n");
    });

    it("should parse the correct `tags` key", () => {
      expect(output.tags).toEqual(["toml1", "toml2", "toml3"]);
    });
  });
});
