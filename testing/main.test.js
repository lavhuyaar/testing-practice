// //Capitalize test
// const capitalize = require("./capitalize");
// test("Capitalized string", () => expect(capitalize("jupiter")).toBe("Jupiter"));

// //Reversed String test
// const reverseString = require("./reverseString");
// test("Reversed string", () => expect(reverseString("Baby")).toBe("ybaB"));

// //Calculator test
// const calculator = require("./calculator");
// test("Calculator add", () => expect(calculator.add(8, 4)).toBe(12));
// test("Calculator subtract", () => expect(calculator.subtract(8, 4)).toBe(4));
// test("Calculator multiply", () => expect(calculator.multiply(8, 4)).toBe(32));
// test("Calculator divide", () => expect(calculator.divide(8, 4)).toBe(2));

//Caesar Cipher test
const caesarCipher = require("./caesarCipher");
test("Caesar Cipher 1", () => expect(caesarCipher('xyz', 3)).toBe('abc'))
test("Caesar Cipher 2", () => expect(caesarCipher('HeLLo', 3)).toBe('KhOOr'))
test("Caesar Cipher 3", () => expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!'))

//Analyze array test
const analyzeArray = require('./analyzeArray')
test("Analyze array", () => expect(analyzeArray([1,8,3,4,2,6])).toBe(object == {
    average: 4,
    min: 1,
    max: 8,
    length: 6
 }))
