const greeting = require('../functions/buggyCode4');

test('Returns special greeting to Mubashir', () => {
    expect(greeting('Matt')).toBe('Hello, Matt!');
});

test('Returns special greeting to Mubashir', () => {
    expect(greeting('Helen')).toBe('Hello, Helen!');
});

test('Returns special greeting to Mubashir', () => {
    expect(greeting('Mubashir')).toBe('Hello, my Love!');
});