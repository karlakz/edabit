const equalityCheck = require('../functions/equalityCheck');

test('Verify the equality of two different values', () => {
    expect(equalityCheck(1, true)).toBe(false);
});

test('Verify the equality of two different values', () => {
    expect(equalityCheck(0, "0")).toBe(false);
});

test('Verify the equality of two different values', () => {
    expect(equalityCheck(0, "")).toBe(false);
});

test('Verify the equality of two different values', () => {
    expect(equalityCheck(NaN, NaN)).toBe(false);
});

test('Verify the equality of two different values', () => {
    expect(equalityCheck(null, undefined)).toBe(false);
});

test('Verify the equality of two different values', () => {
    expect(equalityCheck(undefined, undefined)).toBe(true);
});

test('Verify the equality of two different values', () => {
    expect(equalityCheck(false, null)).toBe(false);
});