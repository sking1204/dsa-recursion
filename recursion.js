/** product: calculate the product of an array of numbers. */

//solution without using second parameter:
function product(nums) {
  //Base Case
  if(nums.length === 0) return 1;
  //Normal Case
  return nums [0] * product(nums.slice(1))

}

// product([3,4,5])


//solution using index:

// function product(nums, index =0){
//   //Base Case
//   if(index === nums.length) return 1;
//   //Normal Case
//   return nums[index] * product (nums, index + 1);
// }




/** longest: return the length of the longest word in an array of words. */

//solution without using second parameter:

// function longest(words) {
//   // Base Case
//   if (words.length === 0) {
//     return 0; 
//   }

//   // Normal Case
//   const currentWord = words[0];
//   const remainingWords = words.slice(1);
//   const currentWordLength = currentWord.length;

 
//   const longestInRest = longest(remainingWords);


//   return Math.max(currentWordLength, longestInRest);
// }

// const words1 = ["kittens", "yarn", "sunny", "beaches"];
// const result1 = longest(words1);

//solution using index:

function  longest(words, index =0){
  //Base Case
  if(index === words.length){
    return 0;
  }

  //Normal Case:
  const currentWordLength = words[index].length;
  const longestInRest=longest(words, index + 1);
  return Math.max(currentWordLength,longestInRest) 
}

// const words2 = ["pineapple", "banana", "mushroom", "fennel"];
// const result2 = longest(words2);  



/** everyOther: return a string with every other letter. */

//solution using index:

// function everyOther(str, idx =0, newStr='') {
//     // Base case: 
//     if (idx >= str.length) return newStr;
//   newStr += str[idx];
//   return everyOther(str, idx + 2, newStr);
// }
  

//solution without using index:

function everyOther(str, isEven = true) {
  if (str === '') {
    return '';
  }

  const selectedChar = isEven ? str[0] : '';
  const remainingChars = str.slice(1);

  return selectedChar + everyOther(remainingChars, !isEven);
}



/** isPalindrome: checks whether a string is a palindrome or not. */

//solution without using index:

function isPalindrome(str) {
   // Base case: If the string is empty or has only one character, it's a palindrome.
   if (str.length <= 1) {
    return true;
  }

  // Compare the first and last characters of the string.
  if (str[0] === str[str.length - 1]) {
    // If they are the same, continue checking the remaining substring without those characters.
    return isPalindrome(str.slice(1, -1));
  } else {
    // If the first and last characters are different, it's not a palindrome.
    return false;
  }
}

//solution using index:

// function isPalindrome(str, idx = 0) {
//   let leftIdx = idx;
//   let rightIdx = str.length - idx - 1;
//   if (leftIdx >= rightIdx) return true;
//   if (str[leftIdx] !== str[rightIdx]) return false;
//   return isPalindrome(str, idx + 1);
// }



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIndex = 0) {
    // Base case: if the current index is out of bounds, return -1
    // to indicate the value was not found.
    if (currentIndex >= arr.length) {
      return -1;
    }
    
    // Check if the current element is equal to the target value.
    if (arr[currentIndex] === val) {
    // Return the index when the value is found.
      return currentIndex; 
    }
    
    // If not found, recursively search in the rest of the array.
    return findIndex(arr, val, currentIndex + 1);
  }



/** revString: return a copy of a string, but in reverse. */

// function revString(str) {
//     // Base case: If the string is empty or has only one character, return it as is.
//     if (str.length <= 1) {
//       return str;
//     } else {
//       // Recursive case: Reverse the string by taking the last character and
//       // appending the reversed substring of the rest of the string.
//       return str.slice(-1) + revString(str.slice(0, -1));
//     }
//   }

  //another solution:

  function revString(str, idx = 0, newStr = "") {
    if (newStr.length === str.length) return newStr;
    newStr += str[str.length - 1 - idx];
    return revString(str, idx + 1, newStr);
  }



/** gatherStrings: given an object, return an array of all of the string values. */


function gatherStrings(obj) {
  let stringArr = [];
  
  function gather(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        stringArr.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        // Recursively process nested objects
        gather(obj[key]); 
      }
    }
  }
  
  gather(obj); // Call the recursive helper function
  
  return stringArr;
}



// another solution: 
// function gatherStrings(obj) {
//   let stringArr = [];
//   for (let key in obj) {
//     if (typeof obj[key] === "string") stringArr.push(obj[key]);
//     if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
//   }
//   return stringArr;
// }



/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2);

//     if (arr[middle] === val) {
//       return middle;
//     } else if (arr[middle] > val) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//   }

//   return -1; // Element not found
// }



//another solution

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

// module.exports = {
//   product,
//   longest,
//   everyOther,
//   isPalindrome,
//   findIndex,
//   revString,
//   gatherStrings,
//   binarySearch
// };
