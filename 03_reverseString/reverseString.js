const reverseString = function(str) {
    
    const lastIndex = str.length - 1;
    let result = '';

    for (let i = lastIndex; i >= 0; i--) {
        result += str[i];
    }

    return result
};

// Do not edit below this line
module.exports = reverseString;
