const numLessOrEqualZero = require('../functions/numLessOrEqualZero');

test('Return true if a number is less than or equal to 0', () => {
    expect(numLessOrEqualZero(0)).toBe(true);
});

test('Return true if a number is less than or equal to 0', () => {
    expect(numLessOrEqualZero(5)).toBe(false);
});

test('Return true if a number is less than or equal to 0', () => {
    expect(numLessOrEqualZero(-5)).toBe(true);
});