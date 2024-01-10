// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

function oddOrevenNum(num){
    if(num % 2 === 0){
        return "even";
    }else{
        return "odd";
    }
}
//Test function for output
console.log(oddOrevenNum(4));
console.log(oddOrevenNum(9));