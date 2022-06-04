const dividesEvenly = require('../functions/dividesEvenly');

test('Returns true if a is divided by b evenly', () => {
    expect(dividesEvenly(98, 7)).toBe(true);
});

test('Returns true if a is divided by b evenly', () => {
    expect(dividesEvenly(87, 49)).toBe(false);
});

test('Returns true if a is divided by b evenly', () => {
    expect(dividesEvenly(-58, 2)).toBe(true);
});

test('Returns true if a is divided by b evenly', () => {
    expect(dividesEvenly(29, -3)).toBe(false);
});

test('Returns true if a is divided by b evenly', () => {
    expect(dividesEvenly(75, -3)).toBe(true);
});

test('Returns true if a is divided by b evenly', () => {
    expect(dividesEvenly(0, 3)).toBe(true);
});

test('Returns true if a is divided by b evenly', () => {
    expect(dividesEvenly(8, 0)).toBe('Number can not be divided by 0');
});


