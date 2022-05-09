const remainder = require('./remainderFromTwoNumbers');

test('Remainder from two numbers', () => {
    expect(remainder(7, 2)).toBe(1)
});

test('Remainder from two numbers', () => {
    expect(remainder(3, 4)).toBe(3)
});

test('Remainder from two numbers', () => {
    expect(remainder(-9, 45)).toBe(-9);
});

test('Remainder from two numbers', () => {
    expect(remainder(5, 5)).toEqual(0)
});

test('Remainder from two numbers', () => {
    expect(remainder(-13, -5)).toBe(-3)
});

test('Remainder from two numbers', () => {
    expect(remainder(0, 0)).toEqual(NaN)
});