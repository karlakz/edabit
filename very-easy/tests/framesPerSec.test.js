const framesPerSec = require('../functions/framesPerSec');

test('Return the number of frames a computer screen shows every second', () => {
    expect(framesPerSec(1, 1)).toBe(60);
});

test('Return the number of frames a computer screen shows every second', () => {
    expect(framesPerSec(10, 1)).toBe(600);
});

test('Return the number of frames a computer screen shows every second', () => {
    expect(framesPerSec(10, 25)).toBe(15000);
});

test('Return the number of frames a computer screen shows every second', () => {
    expect(framesPerSec(0, 1)).toBe(0);
});

test('Return the number of frames a computer screen shows every second', () => {
    expect(framesPerSec(-1, 1)).toBe('Please, enter positive number only!');
});