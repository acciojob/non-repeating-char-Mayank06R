function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};


    for (const char of str) {
        if (char in charCount) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
