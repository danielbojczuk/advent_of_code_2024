const run = require("./run");
const fs = require('fs')

describe("test", () => {
  describe("first", () => {
    it("example", async () => {
      const input = fs.readFileSync('./input/example.txt').toString();
      const result = run.first(input);
      expect(result).toBe(11);
    });
    it("real case", async () => {
      const input = fs.readFileSync('./input/real.txt').toString();
      const result = run.first(input);
      console.log(`first: ${result}`);
    });
  });
  describe("second", () => {
    it("example", async () => {
      const input = fs.readFileSync('./input/example.txt').toString();
      const result = run.second(input);
      expect(result).toBe(31);
    });
    it("real case", async () => {
      const input = fs.readFileSync('./input/real.txt').toString();
      const result = run.second(input);
      console.log(`second: ${result}`);
    });
  });
})