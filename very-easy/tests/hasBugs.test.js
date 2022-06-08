const hasBugs = require('../functions/hasBugs');

test('Returns "sad days" or "it is a good day" depending on the given input', () => {
    expect(hasBugs(true)).toBe('sad days');
});

test('Returns "sad days" or "it is a good day" depending on the given input', () => {
    expect(hasBugs(false)).toBe('it is a good day');
});