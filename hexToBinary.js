// Task: 

// Reference:
// paresInt()-parses a string and returns an integer but it also accepts a second argument
//  for the radix.
// toString()-returns a string representing the specified Number object.

function toBinary(num) {
	return parseInt(num).toString(2);
};

console.log(toBinary(0xFF));
console.log(toBinary(0xFA));
console.log(toBinary(0xAA));
