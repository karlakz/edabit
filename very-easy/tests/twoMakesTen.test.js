const makesTen = require('../functions/twoMakesTen');

test('Returns true if one of arguments is 10 or if their sum is 10.', () => {
    expect(makesTen(9, 10)).toBe(true);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(9, 1)).toBe(true);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(10, 10)).toBe(true);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(12, -2)).toBe(true);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(8, 1)).toBe(false);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(-3, 13)).toBe(true);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(-30, -13)).toBe(false);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(-30.5, 10)).toBe(true);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(5.5, 4.5)).toBe(true);
});

test('Returns true if one of arguments is 10 or if their sum is 10', () => {
    expect(makesTen(-20.5, 10.5)).toBe(false);
});

