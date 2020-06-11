const { fetchData, fetchDataPromise } = require("./asynchronous");
// Testing asynchronously
// WRONG WAY. Uncommenting this section gives wrong jest prompts in the CLI
// test("the data is peanut", () => {
//   function callback(data) {
//     expect(data).toBe("peanut");
//   }
//   fetchData(callback);
// });

// Proper way
test("callback > the data is peanut butter", (done) => {
  function callback(data) {
    expect(data).toBe("peanut butter");
    done();
  }
  fetchData(callback);
});

// When dealing with promises, return a promise
test("promise > the data is peanut butter", () => {
  return fetchDataPromise().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

// Also use async/await
test("async/await > the data is peanut butter", async () => {
  const data = await fetchDataPromise();
  expect(data).toBe("peanut butter");
});

// Test for errors
test("the fetch promise doesn't fail", async () => {
  expect.assertions(0);
  try {
    await fetchDataPromise();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
