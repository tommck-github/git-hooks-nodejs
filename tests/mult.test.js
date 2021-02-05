const mult = require('../src/mult');

test('should return correct product', () => {
  const result = mult(2, 5);
  expect(result).toBe(10);
});
