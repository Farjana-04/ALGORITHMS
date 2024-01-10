// Write code to add all the numbers in `arr` and return the total
var sumArray = function(arr){
var result = 0; //Initializes a variable result to store the sum of the array elements. It starts with a value of 0.
for(var i = 0; i<arr.length; i++){
    var currentNumber = arr[i];
    result += currentNumber;
}
return result;
}
//how you could use this sumArray function:
// the sumArray function would calculate and return the sum of the numbers in the numbers array, which is 15.
// var numbers = [1, 2, 3, 4, 5];
// var totalSum = sumArray(numbers);
// console.log(totalSum); 
// Outputs: 15

//we can use the forEach loop to iterate over the array elements and accumulate the sum.

// var sumArray = function(arr) {
//     var result = 0;
//     arr.forEach(function(currentNumber) {
//       result += currentNumber;
//     });
//     return result;
//   };