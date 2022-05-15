const footballPoints = require('../functions/footballPoints');

test('Calc number of points that the team has obtained', () => {
    expect(footballPoints(3, 4, 2)).toBe(13);
});

test('Calc number of points that the team has obtained', () => {
    expect(footballPoints(5, 0, 2)).toBe(15);
});

test('Calc number of points that the team has obtained', () => {
    expect(footballPoints(0, 0, 1)).toBe(0);
});

test('Calc number of points that the team has obtained', () => {
    expect(footballPoints(0, 0, -1)).toBe('Please, enter positive integers');
});
