function toCase(text) {
  // write your code here
	    if (text === '') {
        return '-'; // Return '-' for empty strings
    }
    
    // Convert the string to lowercase and uppercase
    const lowerCaseStr = text.toLowerCase();
    const upperCaseStr = text.toUpperCase();
    
    // Return the concatenated result with '-' as a delimiter
    return lowerCaseStr + '-' + upperCaseStr;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
