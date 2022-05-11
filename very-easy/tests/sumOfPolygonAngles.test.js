const sumOfPolygonAngles = require('../functions/sumOfPolygonAngles');

test('Calc the sum of polygon angles', () => {
    expect(sumOfPolygonAngles(3)).toBe(180);
});

test('Calc the sum of polygon angles', () => {
    expect(sumOfPolygonAngles(11)).toBe(1620);
});

test('Calc the sum of polygon angles', () => {
    expect(sumOfPolygonAngles(-2)).toBe('Please, enter positive number greater than 2!');
});