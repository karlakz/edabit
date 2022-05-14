const isSameNum = require('../functions/numsEqual');

test('Return true if two numbers are equal', () => {
    expect(isSameNum(2, 2)).toBe(true);
});

test('Return true if two numbers are equal', () => {
    expect(isSameNum(2, '2')).toBe(false);
});

test('Return true if two numbers are equal', () => {
    expect(isSameNum(0, -2)).toBe(false);
});

test('Return true if two numbers are equal', () => {
    expect(isSameNum(-2, 0)).toBe(false);
});

test('Return true if two numbers are equal', () => {
    expect(isSameNum(-2, -2)).toBe(true);
});