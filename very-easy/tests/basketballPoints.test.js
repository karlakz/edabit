const points = require('../functions/basketballPoints');

test('Count points for basketball game', () => {
    expect(points(1, 1)).toBe(5);
});

test('Count points for basketball game', () => {
    expect(points(7, 5)).toBe(29);
});

test('Count points for basketball game', () => {
    expect(points(0, 0)).toBe(0);
});