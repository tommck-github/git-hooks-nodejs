const mult = require('../src/mult')

it('should return correct product', () => {
    const result = mult(2, 5)
    expect(result).toBe(10)
})