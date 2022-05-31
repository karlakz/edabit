const divisibleByFive = require('../functions/intDivisibleByFive');

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(7)).toBe(false);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(5)).toBe(true);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(15)).toBe(true);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(33)).toBe(false);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(-18)).toBe(false);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(0)).toBe(false);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(999)).toBe(false);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(undefined)).toBe(false);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(NaN)).toBe(false);
});

test('Returns true if int is evenly divisible by 5, false otherwise', () => {
    expect(divisibleByFive(15.5)).toBe(false);
});