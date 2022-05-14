const animals = require('../functions/farmProblem');

test('Total number of animals legs', () => {
    expect(animals(2, 3, 5)).toBe(36)
});

test('Total number of animals legs', () => {
    expect(animals(1, 2, 3)).toBe(22)
});

test('Total number of animals legs', () => {
    expect(animals(5, 2, 8)).toBe(50)
});

test('Total number of animals legs', () => {
    expect(animals(0, 0, 0)).toBe(0)
});

test('Total number of animals legs', () => {
    expect(animals(-5, -2, 3)).toBe('Please, enter positive integers only!')
});