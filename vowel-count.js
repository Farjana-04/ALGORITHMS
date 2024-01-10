function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
  
    for (let char of str) {  //This line sets up a for...of loop that iterates over each character (char) in the given string str. It's a way to loop through the characters of a string one by one.
      if (vowels.includes(char)) { //Inside the loop, this line checks whether the current character (char) is included in the vowels string. The includes() method is used to determine if a character is present in the vowels string.
        vowelCount++; //If the current character is a vowel (i.e., it is included in the vowels string), this line increments the vowelCount variable by 1. This is a way to keep track of how many vowels have been found in the string.
      }
    }
  
    return vowelCount;
  }
  
  const inputString = "Hello, how are you?";
  const numberOfVowels = countVowels(inputString);
  console.log(`Number of vowels: ${numberOfVowels}`);