const myMockFn = jest.fn((cb) => cb(null, true));

myMockFn((err, val) => val);

test("callback returns true", () => {
  expect(myMockFn.mock.results[0].value).toBeTruthy();
});
