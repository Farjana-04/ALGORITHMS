// This approach compares each word with its previous one until it finds the word that is smaller, 
//indicating the rotation point. If no rotation point is found, it returns -1. 
//While this method is less efficient than the binary search approach, it may be simpler to understand and implement in some cases.

var rotationPoint = function(words) {
    for (let i = 1; i < words.length; i++) {
      if (words[i] < words[i - 1]) {
        return i;
      }
    }
  
    // If no rotation point is found, return -1
    return -1;
  };
  
  // Example usage:
  const words1 = ["cat", "dog", "elephant", "apple", "banana"];
  console.log(rotationPoint(words1)); // Output: 3 (rotation point is "apple")
  
  const words2 = ["grape", "kiwi", "mango", "orange", "apple"];
  console.log(rotationPoint(words2)); // Output: 4 (rotation point is "apple")


//    var rotationPoint = function(words) {
//     let low = 0;
//     let high = words.length - 1;
  
//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
  
//       // Check if the rotation point is in the right half
//       if (words[mid] > words[mid + 1]) {
//         return mid + 1;
//       }
  
//       // Check which half is sorted and adjust the search accordingly
//       if (words[mid] >= words[low]) {
//         // Left half is sorted, search in the right half
//         low = mid + 1;
//       } else {
//         // Right half is sorted, search in the left half
//         high = mid - 1;
//       }
//     }
  
//     // If no rotation point is found, return -1
//     return -1;
//   };
  
//   // Example usage:
//   const words1 = ["cat", "dog", "elephant", "apple", "banana"];
//   console.log(rotationPoint(words1)); // Output: 3 (rotation point is "apple")
  
//   const words2 = ["grape", "kiwi", "mango", "orange", "apple"];
//   console.log(rotationPoint(words2)); // Output: 4 (rotation point is "apple")

//This function performs a binary search to find the rotation point efficiently. 
//It compares the middle element with its adjacent element to determine if the rotation point is in the right half. 
//Depending on whether the left or right half is sorted, it adjusts the search space accordingly.
  
  