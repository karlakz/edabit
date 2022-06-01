const divisibleBy100 = require('../functions/intDivisibleBy100');

test('Returns true if number divisible by 100, otherwise return false.', () => {
    expect(divisibleBy100(1)).toBe(false);
});

test('Returns true if number divisible by 100, otherwise return false.', () => {
    expect(divisibleBy100(100)).toBe(true);
});

test('Returns true if number divisible by 100, otherwise return false.', () => {
    expect(divisibleBy100(1000)).toBe(true);
});

test('Returns true if number divisible by 100, otherwise return false.', () => {
    expect(divisibleBy100(111000)).toBe(true);
});

test('Returns true if number divisible by 100, otherwise return false.', () => {
    expect(divisibleBy100(-1)).toBe(false);
});

test('Returns true if number divisible by 100, otherwise return false.', () => {
    expect(divisibleBy100(0)).toBe(true);
});

test('Returns true if number divisible by 100, otherwise return false.', () => {
    expect(divisibleBy100(-100)).toBe(true);
})