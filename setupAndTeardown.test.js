let cities = [];

function initializeCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push("Vienna");
      cities.push("San Juan");
      resolve();
    }, 1000);
  });
}

function clearCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities = [];
      resolve();
    }, 2000);
  });
}

function isCity(name) {
  return cities.includes(name);
}

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

test("database has only 2 cities", () => {
  expect(cities.length).toBe(2);
});
