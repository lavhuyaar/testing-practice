//Capitalize test
const capitalize = require("./capitalize");
test("Capitalized string", () => expect(capitalize("jupiter")).toBe("Jupiter"));

//Reversed String test
const reverseString = require("./reverseString");
test("Reversed string", () => expect(reverseString("Baby")).toBe("ybaB"));

//Calculator test
const calculator = require('./calculator');
test('Calculator add', () => expect(calculator.add(8, 4)).toBe(12))
test('Calculator subtract', () => expect(calculator.subtract(8, 4)).toBe(4))
test('Calculator multiply', () => expect(calculator.multiply(8, 4)).toBe(32))
test('Calculator divide', () => expect(calculator.divide(8, 4)).toBe(2))