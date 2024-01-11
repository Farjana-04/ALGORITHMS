// Write code to add all the numbers in `arr` and return the total
//This code defines a function named sumArray which takes an array (arr) as an argument.
//Inside the function, a variable result is initialized to 0. This variable will hold the sum of all numbers in the array.
var sumArray = function(arr){
var result = 0; 
//Then, a for loop is used to iterate over each element in the array. The variable i is used as the counter, 
//starting at 0 (the first index of the array) and going up to arr.length - 1 (the last index of the array).
for(var i = 0; i<arr.length; i++){
    //Inside the loop, the current number being processed is stored in the variable currentNumber. 
    //This is done by accessing the i-th element of the array (arr[i]).
    var currentNumber = arr[i];
    //The currentNumber is then added to result.
    result += currentNumber;
}
//After the loop has finished processing all elements in the array, 
//the function returns result, which now holds the sum of all numbers in the array.
return result;
}
// how you could use this sumArray function:
// the sumArray function would calculate and return the sum of the numbers in the numbers array, which is 15.
// var numbers = [1, 2, 3, 4, 5];
// var totalSum = sumArray(numbers);
// console.log(totalSum); 
// Outputs: 15

// we can use the forEach loop to iterate over the array elements and accumulate the sum.

// var sumArray = function(arr) {
//     var result = 0;
//     arr.forEach(function(currentNumber) {
//       result += currentNumber;
//     });
//     return result;
//   };

//Different and popular way
// Using the reduce() method:
var sumArray = function(arr){
   return arr.reduce((a, b) => a + b, 0);
   //return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.

// Using the forEach() method:
var sumArray = function(arr){
   var result = 0;
   arr.forEach(function(num){
       result += num;
   });
   return result;
}
// The forEach() method executes a provided function once for each array element.

// Using the map() and reduce() methods together:
var sumArray = function(arr){
   return arr.map(Number).reduce(function(a,b){ return a+b }, 0);
}
// The map() method creates a new array with the results of calling a provided function on every element in the array.

//Remember, these are just alternative ways to achieve the same result. 
//The best method to use depends on your specific needs and the context of your code.

