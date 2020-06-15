jest.mock("./foo");
const foo = require("./foo");

foo.mockImplementation(() => 42);

test("foo returns 42", () => {
  expect(foo()).toBe(42);
});

// Complex behavior, multiple function calls producing
// different results
const myMockFn = jest
  .fn((cb) => cb())
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false))
  .mockName("logger");

myMockFn((err, val) => console.log(val)); // => true
myMockFn((err, val) => console.log(val)); // => false

test("myMockFn is called twice", () => {
  expect(myMockFn).toHaveBeenCalledTimes(2);
});
