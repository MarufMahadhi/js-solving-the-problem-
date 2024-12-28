//1. Create a variable called carName, assign the value Volvo to it.

let mala= "lama" ; 


//2. On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

/*So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
3rd Variable Name And Values Both! */

let firstName = "John" , lastName = "Doe" , age = 35 ;


//3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).
 
let x = 10;
let y = 5;
x *= y ;


//4. Use comments to describe the correct data type of the following variables:

let length = 16; // data type: Number
let LastName = "Johnson"; // data type: String

const z = {
  firstName: "John",  
  lastName: "Doe"
}; // data type: Object


//5.Execute the function named myFunction.

function myFunction() {
    alert("Hello World!");
  }
myFunction(); // Call myfunction
  

//6. Create an object called person with name = John, 
// age = 50, Then,access the object to alert("John is 50").

let person = {
    Name: "john",
    Age: 50
};
alert(person.Name +" is "+ person.Age);


//7. The <button> element should do something when someone clicks on it. Try to fix it!

/*<button onclick="myFunction()">Click me</button>
/* <script> */
function myFunction() {
  alert("Button clicked!");
}
/*</script>*/


//8.Array Related Question 

//1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

//2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";



//9. Math Related Problems

//1. Use the correct Math method to create a random number.
let rendom =Meth.rendom();
console.log(rendom);

//2. Use the correct Math method to return the largest number of 10 and 20.
let max = Math.max(10, 20);
console.log(max);

//3. Use the correct Math method to get the square root of 9.
let sqrt = Math.sqrt(9);
console.log(sqrt);



//10. comparison operator related problems! 

//1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert( x>y ) //this is tru ? 

//2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let Age = 16; // Example age

alert(Age < 18 ? "Too young" : "Old enough");



//11. Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; //selsius to fahrenheit formula
}
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77


//12.Write a function to check if a number is even. The function should take a single argument, which is the number to check. 

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false


//13.Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // 5


//14.Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search. 

function findSmallestNum(arr) {
    return Math.min(...arr);
}
console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5



//15.Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search. 

function countVowels(str) {
    return str.match(/[aeiou]/gi).length;
}
console.log(countVowels("hello")); // 2


//16. Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(arr) {
    return arr[0]; // array first element show korbe
    
  }
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
  
  

//17. Write a function to check if an array is empty. The function should take a single argument, which is the array.
  

function isArrayEmpty(arr) {
    return arr.length === 0; // array khali kina check korbe
  }
console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false
  

//18.Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorialize(num) {
    if (num === 0 || num === 1) return 1; //1 ar factorial 1
    return num * factorialize(num - 1); // rikarson diye factorial kora
}  
console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040



//19. Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {
    return str.split('').reverse().join(''); // স্ট্রিংটি রিভার্স করে
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  


//20. Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.


function toLowerCase(str) {
    return str.toLowerCase(); // string ke lower case a convert korbe
  } 
console.log(toLowerCase("HELLO")); // "hello"


//21. Write a function to find the length of a string. The function should take a single argument, which is the string.


function stringLength(str) {
    return str.length; //string length show korbe
}
console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5


//22. Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]; // array merge korbe
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  

  

//23. Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
    return arr[arr.length - 1]; // array er last element show korbe
  }
console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"


//24. Write a function to get the first character of a string. The function should take a single argument, which is the string.
  



function getFirstCharacter(str) {
    return str[0]; // string er first character show korbe
  }
console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"


//25. Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  