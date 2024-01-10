var romanToInt = function(str) {
    const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < str.length; i++) {
      let currentVal = romanMap[str[i]];
      let nextVal = romanMap[str[i + 1]];
  
      // If the next numeral is greater, subtract the current value
    //   +=: It is the addition assignment operator.
    // -=: It is the subtraction assignment operator.
      if (nextVal > currentVal) {
        result -= currentVal;
      } else {
        result += currentVal;
      }
    }
  
    return result;
  };
  
  // Example usage:
  console.log(romanToInt("III")); // Output: 3
  console.log(romanToInt("IV")); // Output: 4
  console.log(romanToInt("IX")); // Output: 9
  console.log(romanToInt("LVIII")); // Output: 58
  console.log(romanToInt("MCMXCIV")); // Output: 1994
  