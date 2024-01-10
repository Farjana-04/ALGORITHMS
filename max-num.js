//Find maximum array

var maxNum = function(arr){
    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

//Minimum array

var minNum = function(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

// Test the functions
var numbers = [5, 2, 9, 1, 5, 6];
console.log("Max:", maxNum(numbers));
console.log("Min:", minNum(numbers));