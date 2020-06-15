function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

// Mock function is called twice
test("callback fn is called twice", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

// The first argument to the first function call was 0
test("the first argument to the first callback call was 0", () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});

// The first argument to the second function call was 1
test("the first argument to the second callback call was 1", () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

// Return value of the first call to the function was 42
test("the return value of the first callback fn call was 42", () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});

// One can simulate return values in the mocked function object
const filterTestFn = jest.fn();

// Make the mock return `true` for the first call
// and `false` for the second call
filterTestFn.mockReturnValue(false).mockReturnValue(true);

const result = [11, 12].filter((num) => filterTestFn(num));

console.log(result);

console.log(filterTestFn.mock.calls);
