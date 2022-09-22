const removeFromArray = function(arr, ...targets) {
    const result = [];
    let arrSize = arr.length - 1;
    let arrIndex = 0;
    let resultIndex = 0;

    while (arrIndex <= arrSize) {
        if (targets.includes(arr[arrIndex])) {
            arrIndex++;
            continue;
        }

        result[resultIndex] = arr[arrIndex];
        arrIndex++;
        resultIndex++;
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
