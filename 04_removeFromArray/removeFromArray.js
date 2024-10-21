const removeFromArray = function(array, ...args) {
    if (args.length < 1) return array;
    let output = array.filter(item => !args.includes(item));
    console.log(output);
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
