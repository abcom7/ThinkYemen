var numbers = [1, 6, 4, 70]
var otherNumbers = [5, 100, 40]


function addNumbers(numbersArray)
{
    var result = 0
    for (var i = 0; i < numbersArray.length; i++) {
        result = result + numbersArray[i]
    }
    return result
}

// console.log(result)

var sum = addNumbers([9, 2, 40])
console.log(sum)
// addNumbers(numbers)
// addNumbers(otherNumbers)

// var result = 5
// for (var i = 0; i < numbers.length; i++) {
//     result = result + numbers[i]
// }
// console.log(result)


// var result = 5
// for (var i = 0; i < otherNumbers.length; i++) {
//     result = result + otherNumbers[i]
// }
// console.log(result)



