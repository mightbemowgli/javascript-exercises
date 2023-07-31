const reverseString = (stringInput) => {
    let stringArray = stringInput.split('');
    let reverseArray = stringArray.reverse();
    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
