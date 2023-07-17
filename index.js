function isPalindrome(str) {
	// Remove punctuation, convert to lowercase, and remove spacing
	const formattedStr = str.toLowerCase().replace(/[^a-z0-9]+/g, "");
	// Reverse the formatted string
	const reversedStr = formattedStr.split("").reverse().join("");
	// Check if the formatted string and its reverse are equal
	return formattedStr === reversedStr;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
