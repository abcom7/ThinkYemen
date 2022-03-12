
var numbers = [1, 6, 4, 50]
var otherNumbers = [5, 100, 40]


// function addNumbers(numberArray) {
//     var result = 0
//     for (var i = 0; i < numberArray.length; i++) {
//         result = result + numberArray[i]
//     }
//     console.log(result)
// }
// addNumbers([9,2])
// addNumbers(numbers)
// addNumbers(otherNumbers)

function addNumbers(numberArray) {
    var result = 0
    for (var i = 0; i < numberArray.length; i++) {
        result = result + numberArray[i]
    }
    return result
}
var sum = addNumbers([9,2])
console.log(sum);
// addNumbers(numbers)
// addNumbers(otherNumbers)