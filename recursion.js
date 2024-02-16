/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case
  if (nums.length ===0 )return 1;
  // Normal case
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */
function longest(words){
  // base case
  if (words.length === 0 ) return 0;

  if (words.length ===1){
    return words[0].length
  }

  const restLongest = longest(words.slice(1));

  const currentLength = words[0].length;

  return Math.max(restLongest, currentLength);
}
/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length ===0) return str;

  return str[0]+everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // base 
  if (str.length ===0) return true;

  return str[0] === str[str.length-1] && isPalindrome(str.slice(1,-1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
 if (arr.length ===0) return -1
 if (arr[0] === val) return 0
 const idx = findIndex(arr.slice(1), val);
 //console.log(idx);

 return idx === -1 ? -1: idx+1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length ===0) return str;

  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];

  for (let key in obj){
    if (typeof(obj[key]) === 'string'){
      arr.push(obj[key]);
    }
    else{
      arr = arr.concat(gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function search(low, high){
    if (low>high){
      return -1;
    }
    let mid = Math.floor((low+high)/2);
    if (arr[mid]===val){
      return mid;
    }
    else if(arr[mid]>val){
      return search(low,mid-1);
    }
    else{
      return search(mid+1, high);
    }
  }
  return search(0, arr.length-1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
