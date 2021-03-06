/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/
function sum (inputArray){
  var arraySum = 0
  for (i=0;i<inputArray.length;i++){
    arraySum += inputArray[i]
  }
  return arraySum;
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/
function doubleNumbers(arr){
  var doubledArray = [];
  for(i=0;i<arr.length;i++){
    doubledArray.push(arr[i]*2)
  }
  return doubledArray;
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/
function multiplyNumbers(arr,multiplier){
  var multipliedArray = [];
  for (var i=0;i<arr.length;i++) {
    multipliedArray.push(arr[i] * multiplier)
  }
  return multipliedArray;
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/
function doubleLetters(str){
  var splitStr = str.split("");
  var newArr = [];
  for (var i=0;i<splitStr.length;i++){
    newArr.push(splitStr[i]+splitStr[i])
  }
  return newArr.join('');
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/
function interleave(arr1,arr2){
  var newArray = [];
  for(var i=0;i<arr1.length;i++){
    newArray.push(arr1[i])
    newArray.push(arr2[i])
  }
  return newArray;
}










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/
function createRange(num,str){
  var rangeArray = [];
  for (var i=0; i<num; i++){
    rangeArray.push(str)
  }
  return rangeArray;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/
function flipArray(arr){
  flipObject = {};
  for(var i=0;i<arr.length;i++){
    flipObject[arr[i]] = i;
  }
  return flipObject;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/
function arraysToObject(arr){
  var newObject = {};
  for (var x of arr){
      newObject[x[0]]=x[1]
  }
  return newObject
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/
function reverseString(str){
  var emptyArray = [];
  for(var i=str.length;i>=0;i--){
    emptyArray.push(str.charAt(i))
  }
  return emptyArray.join("");
}











/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/
function repeats(str){
  if(str.substring(0,str.length/2) === str.substring(str.length/2, str.length+1)){
    return true
  }
  else {
    return false
  }
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/
function everyOther(str){
  var tx = ""
  for (a=0;a<str.length;a++){
    var ch = str.charAt(a)
    if(a%2===0){tx += ch}
  }
  return tx
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/
function allEqual(str){
  if(str.length === 0){return true}
  var newStr = ''
  for(i=0;i<str.length;i++){
    if(str.charAt(0) === str.charAt(i)){
      newStr += str.charAt(i)
    }
    else{return false}
  }
  if(newStr.length === str.length){
    return true
  }
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/
function sumLetters(str){
  var strSplit = str.split('')
  var arraySum = 0
  for (i=0;i<strSplit.length;i++){
    arraySum += (strSplit[i]*1)
  }
  return arraySum;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/
function countVowels(str){
  var vowels = ''
  for(i=0;i<str.length;i++){
    if(str.charAt(i)=== "a" || str.charAt(i)==="e" || str.charAt(i)==="i" || str.charAt(i)==="o" || str.charAt(i)==="u"){
      vowels += str.charAt(i)
    }
  }
  return vowels.length
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/
function split(str){
  var splitArray = [];
  for (i=0;i<str.length;i++){
    splitArray.push(str.charAt(i))
  }
  return splitArray
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/
function getCodePoints(str){
  var splitArray = [];
  for (i=0;i<str.length;i++){
    splitArray.push(str.codePointAt(i))
  }
  return splitArray
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/
function letterMap(str){
  var letterObj = {};
  for (i=0;i<str.length;i++){
    letterObj[str.charAt(i)] = i
  }
  return letterObj
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/
function letterCount(str){
  var newObj={};
  for (i=0;i<str.length;i++){
    var count = 0
    for(a=0;a<str.length;a++){
    if(str.indexOf(str.charAt(i),a) === a){count++}}
    newObj[str.charAt(i)] = count
  }
  return newObj
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/
function threeOdds(num1,num2){
  var count = 0
  for (var i=num1;i<num2;i++){
    if(i%2 != 0){
      count++
    }
  }
  return (count >= 3)
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/
function leftPad(str,num,char){
  var arrayA = [];
  arrayA[num-str.length-1]='';
  arrayA.push(str);
  return arrayA.join(char)
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/
function createString(num,letter){
  var arrayLet = [];
  arrayLet[num]='';
  return arrayLet.join(letter);
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/
function factorial(num){
  var cntArr = [];
  for(x=num;x>0;x--){
    cntArr.push(x);
  }
  return cntArr.reduce(function(a,b){return a*b},1);
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/
function arrayOfNumbers(num){
  var numArr = [];
  for(x=1;x<=num;x++){
    numArr.push(x);
  }
  return numArr
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/
function evenOdd(num1,num2){
  var newObj={};
  if (num2 === 0){return newObj};
  for (i=num1;i<=num2;i++){
    newObj[i] = (i%2 === 0) ? "even" : "odd"
  }
  return newObj;
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/
function growingKeys(num,str){
  var emptObj = {};
  for (i=1;i<=num;i++){
    emptObj[str.repeat(i)]= true
  }
  return emptObj
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/
function every(arr,val){
  for(i=0;i<arr.length;i++){
    (val === arr[i]) ? arr.splice(i,1,true) : arr.splice(i,1,false);
  }
  return arr.indexOf(false) === -1
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/
function some(arr,val){
  for(i=0;i<arr.length;i++){
    (val === arr[i]) ? arr.splice(i,1,true) : arr.splice(i,1,false);
  }
  return arr.indexOf(true) != -1
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/
function toSentence(arr){
  var emptyString = '';
  if(arr.length===0){return emptyString}
  for (i=0;i<arr.length-2;i++){
    emptyString+=arr[i]+", ";
  }
  return emptyString+arr[arr.length-2]+" and "+arr[arr.length-1]
  }



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/
function acronym(arr){
  var acro = ''
  for(i=0;i<arr.length;i++){
    acro += arr[i].charAt(0)
  }
  return acro
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/
function min(arr){
  arr.sort(function(a, b){
  return a - b;});
  return arr[0]
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property
Example:
If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}
*/
function index(arr){
  var newObj = {};
  for(i=0;i<arr.length;i++){
    var objProp = arr[i];
    for(var prop in objProp){
      objProp[prop]
      break;
    }
    newObj[objProp[prop]] = arr[i]
  }
  return newObj
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/
function invert(obj){
  var difObj = {};
  for(var each in obj){
    difObj[obj[each]]=each;
  }
  return difObj
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/
function addSignature(name,obj){
  var difObj = {};
  for(var value in obj){
    difObj[value+"-signed"] = obj[value]+" - "+name;
  }
  return difObj
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/
function pairs(obj){
  var newArray = [];
  for(var item in obj){
    newArray.push(item+" - "+obj[item])
  }
  return newArray
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/
function sumValues(obj){
  var empArr = [];
  for(var thing in obj){
    empArr.push(obj[thing])
  }
  if(empArr.length===0){return 0};
  return empArr.reduce(function(a,b){return a+b});
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/
function biggestProperty(obj){
  if(Object.getOwnPropertyNames(obj).length === 0){return undefined}
  var emptyArr = [];
  for(var prop in obj){
    emptyArr.push([obj[prop],prop])
  }
  emptyArr.sort(function(a,b){return b[0]-a[0]});
  return emptyArr[0][1];
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/
function keyForValue(obj,value){
  if(Object.getOwnPropertyNames(obj).length === 0){return undefined}
  var ans='';
for(var prop in obj){
  if(obj[prop] === value){
    ans+=prop
  }
}
return ans
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/
function containsValue(obj,val){
  if(Object.getOwnPropertyNames(obj).length === 0){return false}
  var emptyArr = [];
  for(var prop in obj){
    emptyArr.push(obj[prop],prop)
  }
  if(emptyArr.indexOf(val) != -1){return true}
  else {return false}
}








//
