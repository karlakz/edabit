const maxNum = require('../functions/maxNumber');

test('Return the highest number', () => {
    expect(maxNum(3, 7)).toBe(7);
});

test('Return the highest number', () => {
    expect(maxNum(-1, 0)).toBe(0);
});

test('Return the highest number', () => {
    expect(maxNum(1000, 400)).toBe(1000);
});

test('Return the highest number', () => {
    expect(maxNum(-3, -9)).toBe(-3);
});

test('Return the highest number', () => {
    expect(maxNum(3.568, 4.587)).toBe(4.587);
});