const isSeven = require('../functions/isSeven');

test('', () => {
    expect(isSeven(4)).toBe(false);
});

test('', () => {
    expect(isSeven(0)).toBe(false);
});

test('', () => {
    expect(isSeven(-5)).toBe(false);
});

test('', () => {
    expect(isSeven(7)).toBe(true);
});