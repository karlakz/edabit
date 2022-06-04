const area = require('../functions/areaOfRectangle');

test('Calculates the area of a rectangle', () => {
    expect(area(5, 4)).toBe(20);
});

test('Calculates the area of a rectangle', () => {
    expect(area(5, -2)).toBe(-1);
});

test('Calculates the area of a rectangle', () => {
    expect(area(0, 4)).toBe(-1);
});

test('Calculates the area of a rectangle', () => {
    expect(area(100, 100)).toBe(10000);
});