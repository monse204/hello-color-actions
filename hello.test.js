const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola Mundo desde Costa Rica, Pura Vida!!!");
  });
});
