const findPerimeter = require('./perimeterOfRect');

test('Calculate the perimeter of rectangle', () => {
    expect(findPerimeter(6, 7)).toEqual(26);
});

test('Calculate the perimeter of rectangle', () => {
    expect(findPerimeter(-2, -7)).toBe('Please, enter positive numbers');
})

test('Calculate the perimeter of rectangle', () => {
    expect(findPerimeter(-5, 7)).toEqual('Please, enter positive numbers');
})