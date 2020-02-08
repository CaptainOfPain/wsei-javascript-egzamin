function bigestSumOfTwoElements(array) {
    var maxNumber = 0;
    var viceMaxNumber = 0;

    if(array.length == 0) {
        return false;
    }

    if(array.length == 1) {
        return array[0];
    }

    for (let element of array) {
        if(element > maxNumber) {
            viceMaxNumber = maxNumber;
            maxNumber = element;
        }
    }

    for(let element of array) {
        if(element > viceMaxNumber && element != maxNumber) {
            viceMaxNumber = element;
        }
    }
    
    return maxNumber + viceMaxNumber;
}


console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));