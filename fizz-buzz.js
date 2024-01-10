var fizzBuzz = function(arr){
    arr.forEach(function(num){
        if(num % 3 === 0 && num % 5 === 0){
            console.log("Fizz Buzz")
        }else if(num % 3 === 0){
            console.log("Fizz")
        }else if(num % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(num)
        }

    });
};