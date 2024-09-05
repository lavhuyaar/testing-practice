function caesarCipher(str, num) {
  let newStr = ""; //Empty string to store the individual characters accordingly
  for (let i = 0; i < str.length; i++) {
    let char = str[i].charCodeAt(0); //Character code of the individual letters of the string
    //Character code of 'A' is 65 and character code of 'Z' is 90
    //Character code of 'a' is 97 and character code of 'z' is 122
    //Thus the numbers below are ranged b/w these specific numbers
    let newChar = char + num; //Character code + passed Number (how much further the alphabets should be shifted) (new character code)
    if ((newChar >= 97 && newChar <= 122) || (newChar >= 65 && newChar <= 90)) {
      //Checks if the letters are between a-z or A-Z
      newStr += String.fromCharCode(newChar); //If yes, then the character at the particular shifted index/code is added to the newStr
    } else if (newChar > 122 && char <= 122 && char >= 97) {
      //If the new character code is more than 122, and it's defintely one of the lowercase alphabet, then it is adjusted in to be within the range of lowercase alphabets
      newChar = ((newChar % 122) % 26) + 96; //This wraps up the new character code to be within the range of lowercase alphabets (a-z)
      /*For ex- If the string passed as the parameter has 'z' in it, and the shifted number is 5, then it results to the new character code of 127 
     (character code of 'z' is 122 + 5). Since letter with character code of 127 is not one of the lowercase alphabets, this new character code is
     divided by upper limit(122) to get the remainder(in this case 5), which is then added to 96(lower limit - 1), resulting to 101. This new code can be used to get the lowercase alphabet, which in this case is 'e'(character code of 'e' is 101). */
      newStr += String.fromCharCode(newChar);
    } else if (newChar > 90 && char <= 90 && char >= 65) {
      //This wraps up the new character code to be within the range of uppercase alphabets (A-Z)
      newChar = ((newChar % 90) % 26) + 64; //Here 90 is the upper limit and 64 is lower limit - 1
      newStr += String.fromCharCode(newChar);
    } else {
      newStr += str[i]; //All the other letters in passed string, such as comma, full stop, etc.(except alphabets) are added as it is to the newStr empty string
    }
  }
  return newStr; //Returns the newStr after the loop is ended
}

module.exports = caesarCipher;

//It took me a few hours to solve this problem (I didn't google the solution, I swear), so I added detailed comments so that if someone comes around this code while struggling to solve this problem, he/she can understand what is happening here.
