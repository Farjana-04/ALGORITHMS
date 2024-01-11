// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number
//Inside the function, a for loop is used to iterate from num down to 1. 
//The variable i is used as the counter, starting at num and decrementing by 1 after each iteration until it reaches 0.
var countdown = function(num){
    for (var i = num; i>0; i--){
        console.log(i)
    }
}
countdown(5);
//When you call countdown(5), it will print the numbers 5, 4, 3, 2, and 1 to the console, one per line, in descending order.