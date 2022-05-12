// Task: https://edabit.com/challenge/ZNwHGgHvsdnYwJ5WK

// Reference: https://jestjs.io/docs/expect

const nameString = require('../functions/varAssignment');

test('Cancatenate name with Edabit', () => {
    expect(nameString('Mubashir')).toBe('MubashirEdabit');
})

test('Cancatenate name with Edabit', () => {
    expect(nameString('javaScript')).toBe('javaScriptEdabit')
})