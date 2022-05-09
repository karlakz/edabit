const printArray = require('./buggyCode5');

test('Print an array up to the specified number', () => {
    expect(printArray(3)).toEqual([1, 2, 3])
});

test('Print an array up to the specified number', () => {
    expect(printArray(10)).toEqual([1,2,3,4,5,6,7,8,9,10])
});

test('Print an array up to the specified number', () => {
    expect(printArray(0)).toEqual("You typed wrong number. Use only positive integer numbers please")
});

test('Print an array up to the specified number', () => {
    expect(printArray(-3)).toEqual("You typed wrong number. Use only positive integer numbers please")
});

