function fetchData(callback) {
  setTimeout(() => callback("peanut butter"), 2000);
}
function fetchDataPromise(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
}

module.exports = { fetchData, fetchDataPromise };
