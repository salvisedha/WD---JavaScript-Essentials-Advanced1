
// Q.1 Using console.log() print out the following statement: The quote 'There is no exercisebetter for the heart than reaching down and lifting people up.' by John Holmes teaches us tohelp one another. Using console.log() print out the following quote by Mother Teresa:
// Ans = console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
// console.log("Mother Teresa once said, 'If you can't feed a hundred people, then feed just one.'");

// Q.2 Check if typeof '10' is exactly equal to 10. If not make it exactly equal?
//Ans=
// if (typeof '10' !== typeof 10) {
//     let convertedValue = parseInt('10');
//     console.log(convertedValue); // Output: 10
//     console.log(typeof convertedValue); // Output: number
// }

//Q.3 Write a JavaScript Program to find the area of a triangle?
// Ans = 
// function calculateTriangleArea(base, height) {
//     let area = 0.5 * base * height;
//     return area;
// }

// // Example usage:
// let base = 5;
// let height = 10;
// let area = calculateTriangleArea(base, height);

// console.log("The area of the triangle is: " + area);

// Q.4 Write a JavaScript program to calculate days left until next Christmas?
//Ans =   
// function daysUntilNextChristmas() {
//     let today = new Date();
//     let currentYear = today.getFullYear();
//     let nextChristmas = new Date(currentYear, 11, 25); // December is month 11 (0-indexed)

//     // If Christmas has already passed this year, use next year
//     if (today > nextChristmas) {
//         nextChristmas = new Date(currentYear + 1, 11, 25);
//     }

//     let timeDifference = nextChristmas - today;
//     let daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert from milliseconds to days

//     return daysLeft;
// }
// // Example usage:
// console.log("Days left until next Christmas: " + daysUntilNextChristmas());

//Q.5 What is Condition Statement?
//Ans = A conditional statement in programming is a feature that performs different actions based on whether a specified condition evaluates to true or false. It allows the code to make decisions and execute certain blocks of code conditionally.


// (q-6)find circumference of Rectangle formula :C=4*a?
//Ans=

// let c=4;
// let a;
// let total ;

// a=parseInt(prompt("Enter the value"));

// {
//     total=c*a
// }
// document.write(total);

//(q-7) WAP to convert years into days and days into years? 
// days into year
// let year=1*365;
// let day=parseInt(prompt("Enter days"));
// document.write(day+year);

// years convert into Days
// let y=parseInt(prompt("Enter years"));
// let d = 365*y;

// {document.write(d);}



// (q8)Convert temperature Fahrenheit to Celsius? (Conditional logic Question) 

// let f=parseInt(prompt("Enter Fahrenheit"))
// let c = (f - 32)* 5/9

// console.log(c);

//Q.9 Write a JavaScript exercise to get the extension of a filename.?
 //Ans =
//  function getFileExtension(filename) {
//     // Find the last dot in the filename
//     let lastDotPosition = filename.lastIndexOf('.');

//     // If there is no dot or the dot is the first character, return an empty string
//     if (lastDotPosition === -1 || lastDotPosition === 0) {
//         return '';
//     }

//     // Return the substring from the last dot to the end of the filename
//     return filename.substring(lastDotPosition + 1);
// }

// // Example usage:
// console.log(getFileExtension('document.txt'));       // Output: txt
// console.log(getFileExtension('archive.tar.gz'));     // Output: gz
// console.log(getFileExtension('no_extension'));       // Output: (empty string)
// console.log(getFileExtension('.hiddenfile'));        // Output: (empty string)

// (q10) What is the result of the expression (5 > 3 && 2 < 4)? 
 
//Ans=>true

// (q-11)  What is the result of the expression (true && 1 && "hello")? 
// Ans=>hello

// Q.12 What is the result of the expression true && false || false && true?
// Ans= 

// Q.13 Check Number Is Positive or Negative in JavaScript? 
// Ans= 
// let n1;


// n1 = parseInt(prompt("Enter the  number"));

// if(n1<0)
// {
//     console.log("negative number");
// }
// else if (n1>0)
// {
//     console.log("positive number");
// }

// Q.14 Find the Character Is Vowel or Not ?
// Ans= 
    //    let vowels=prompt("enter the vowels")
    //  if(vowels=="a"||vowels=="e"||vowels=="i"||vowels=="o"||vowels=="u"){
    //     console.log(vowels);
    //  }
    //  else if(vowels=="A"||vowels=="E"||vowels=="I"||vowels=="O"||vowels=="U"){
    //     console.log(vowels);
    //  }
    //  else{console.log("consonant");}


// Q.15 Write to check whether a number is negative, positive or zero?
// Ans =
// function checkNumber(number) {
//     if (number > 0) {
//         console.log("The number is positive.");
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// // Example usage:
// checkNumber(10);   // Output: The number is positive.
// checkNumber(-5);   // Output: The number is negative.
// checkNumber(0);    // Output: The number is zero.


//Q.16 Write to find number is even or odd using ternary operator in JS?
//Ans = 
// function checkEvenOrOdd(number) {
//     let result = (number % 2 === 0) ? "Even" : "Odd";
//     console.log("The number is " + result + ".");
// }

// // Example usage:
// checkEvenOrOdd(10); // Output: The number is Even.
// checkEvenOrOdd(7);  // Output: The number is Odd.

//Q.17 Write find maximum number among 3 numbers using ternary operator in JS?
//Ans = 
// function findMax(a, b, c) {
//     let max = (a > b) 
//     ? ((a > c) ? a : c) 
//     : ((b > c) ? b : c);
// console.log("The maximum number is " + max + ".");
// }

// // Example usage:
// findMax(5, 10, 7); // Output: The maximum number is 10.
// findMax(15, 12, 20); // Output: The maximum number is 20.
// findMax(8, 8, 8); // Output: The maximum number is 8.


//Q.18 Write to find minimum number among 3 numbers using ternary operator in JS?
//Ans = 
// function findMin(a, b, c) {
//     let min = (a < b)
//         ? (a < c ? a : c)
//         : (b < c ? b : c);
//     console.log("The minimum number is " + min + ".");
// }

// // Example usage:
// findMin(5, 10, 7); // Output: The minimum number is 5.
// findMin(15, 12, 20); // Output: The minimum number is 12.
// findMin(8, 8, 8); // Output: The minimum number is 8.

// Q.19 Write to find the largest of three numbers in JS?

//Ans =   
// function findLargest(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// let num1 = 10;
// let num2 = 25;
// let num3 = 15;

// let largest = findLargest(num1, num2, num3);
// console.log("The largest number is: " + largest);

// Q.20 Write to show
// i. Monday to Sunday using switch case in JS?
// ii. Vowel or Consonant using switch case in JS?
// Ans=  
// function checkVowelOrConsonant(char) {
//     let lowerChar = char.toLowerCase();
//     switch(lowerChar) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return char + " is a vowel";
//         default:
//             return char + " is a consonant";
//     }
// }

// let character = 'E'; // Example input
// console.log(checkVowelOrConsonant(character));



                   //(Conditional looping logic Question)
// Q.21 What are the looping structures in JavaScript? Any one Example?
// Ans= 
//      // Example: Print numbers from 1 to 5
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Q.22 Write a print 972 to 897 using for loop in JS?
// Ans= 
// for (let i = 972; i >= 897; i--) {
//     console.log(i);}
// Q.23 Write to print factorial of given number?
// Ans= function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;

// let number = 5; // Example input
// console.log("Factorial of " + number + " is: " + factorial(number));



// Q.24 Write to print Fibonacci series up to given numbers?
// Ans=
// function fibonacciSeries(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib.slice(0, n);
// }

// let count = 10; // Example input
// console.log("Fibonacci series up to " + count + " numbers: " + fibonacciSeries(count).join(", "));

// Q.25 Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?
// Ans=
// function reverseNumber(num) {
//     return parseInt(num.toString().split('').reverse().join(''));
// }

// let number = 64728; // Example input
// console.log("Reverse of " + number + " is: " + reverseNumber(number));

// Q.26 Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?
//Ans=
// function sumOfDigits(num) {
//     // Convert the number to a string to easily access each digit
//     let numStr = num.toString();
    
//     // Initialize the sum to 0
//     let sum = 0;
    
//     // Loop through each character in the string
//     for (let char of numStr) {
//         // Convert the character back to a number and add it to the sum
//         sum += parseInt(char);
//     }
    
//     return sum;
// }

// let number = 1523; // Example input
// console.log("Sum of digits of " + number + " is: " + sumOfDigits(number));

// Q.27 Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -5) in JS?
//Ans=
// function sumFirstAndLastDigit(num) {
//     // Convert the number to a string
//     let numStr = num.toString();
    
//     // Extract the first and last digit
//     let firstDigit = parseInt(numStr[0]);
//     let lastDigit = parseInt(numStr[numStr.length - 1]);
    
//     // Calculate the sum of the first and last digit
//     return firstDigit + lastDigit;
// }

// let number = 1234; // Example input
// console.log("Sum of the first and last digit of " + number + " is: " + sumFirstAndLastDigit(number));
     
// Q.28 Use console.log() and escape characters to print the following pattern in JS?
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
//Ans =
      



// Q.29 Use pattern in console.log in JS?
// 1) 1
//    1 0
//    1 0 1
//    1 0 1 0
//    1 0 1 0 1

// Ans 
//     for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++)
//     if (j%2==0){
//         document.write("0" )
//     } 
//     document.write('<br>')   
//    else{(document.write("1"))} 
// }

    // 2) A
    //    B C D
    //    E F
    //    G H I J
    //    K L M N O
    //Ans
    // let charCode = 65; // ASCII code for 'A'

    // for (let i = 1; i <= 5; i++) {
    //     let pattern = '';
    //     let length;
    //     if (i === 1 || i === 3) {
    //         length = 1;
    //     } else if (i === 2) {
    //         length = 3;
    //     } else if (i === 4) {
    //         length = 4;
    //     } else {
    //         length = 5;
    //     }
    //     for (let j = 0; j < length; j++) {
    //         pattern += String.fromCharCode(charCode++) + ' ';
    //     }
    //     console.log(pattern.trim());
    // }
    
    // 3) 1
    //    2 3
    //    4 5 6
    //    7 8 9 10
    //    11 12 13 14 15

   //Ans
//  x=1

// for(row=1;row<=5;row++)//1;2<=3;2++  outer loops //rows
// {
//    for(col=1;col<=row;col++)//1;1<=3;1++  //inner loops //cols
//    {
//     document.write(x++ +" "); //1 1 1
//    }
//    document.write("<br>")}

// 4) *
//    * *
//    * * *
//    * * * *
//    * * * * *
// Ans=
     
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write('<br>');
// }
// document.write('<hr>')

//Q.30 Accept 3 numbers from user using while loop and check each numbers palindrome
//Ans = 
// function isPalindrome(num) {
//     // Convert the number to a string
//     let str = num.toString();
//     // Reverse the string
//     let reversedStr = str.split('').reverse().join('');
//     // Check if the original string is equal to the reversed string

//Q.31 Write a JavaScript Program to display the current day and time in the followingformat. Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?
// Ans= 
// function displayCurrentDayAndTime() {
   
//     let now = new Date();
//     let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let day = daysOfWeek[now.getDay()];
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let amPm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12;
//     hours = hours ? hours : 12; 


//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     let currentTime = `Today is ${day}. Current Time is ${hours} ${amPm} : ${minutes} : ${seconds}`;
//     console.log(currentTime);
// }

// displayCurrentDayAndTime();

// Q.32 Write a JavaScript program to get the current date?
// Ans=
// function getCurrentDate() {

//     let now = new Date();

//     let year = now.getFullYear();
//     let month = now.getMonth() + 1; 
//     let day = now.getDate();

//     month = month < 10 ? '0' + month : month;
//     day = day < 10 ? '0' + day : day;


//     let formattedDate = `${year}-${month}-${day}`;

//     console.log("Current Date: " + formattedDate);
// }

// getCurrentDate();

//Q.33 Write a JavaScript program to compare two objects?
//Ans=
// function isObject(obj) {
//     return obj !== null && typeof obj === 'object';
//   }
  
//   function deepEqual(obj1, obj2) {
//     if (obj1 === obj2) {
//       return true;
//     }
  
//     if (!isObject(obj1) || !isObject(obj2)) {
//       return false;
//     }
  
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
  
//     if (keys1.length !== keys2.length) {
//       return false;
//     }
  
//     for (let key of keys1) {
//       if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // Example usage
//   const obj1 = {
//     name: "Alice",
//     age: 25,
//     details: {
//       hobby: "reading",
//       city: "Wonderland"
//     }
//   };
  
//   const obj2 = {
//     name: "Alice",
//     age: 25,
//     details: {
//       hobby: "reading",
//       city: "Wonderland"
//     }
//   };
  
//   const obj3 = {
//     name: "Alice",
//     age: 30,
//     details: {
//       hobby: "reading",
//       city: "Wonderland"
//     }
//   };
  
//   console.log(deepEqual(obj1, obj2)); // true
//   console.log(deepEqual(obj1, obj3)); // false
  
//Q.34 Write a JavaScript program to convert an array of objects into CSV string?
//Ans
// function arrayToCSV(data) {
//     if (!data || !data.length) {
//       return '';
//     }
  
//     const keys = Object.keys(data[0]);
//     const csvRows = [];
  
//     // Add the header row
//     csvRows.push(keys.join(','));
  
//     // Add the data rows
//     for (const row of data) {
//       const values = keys.map(key => {
//         let val = row[key];
//         // Handle commas and quotes in values
//         if (typeof val === 'string') {
//           val = val.replace(/"/g, '""'); // Escape double quotes
//           if (val.includes(',')) {
//             val = `"${val}"`; // Wrap in double quotes if value contains a comma
//           }
//         }
//         return val;
//       });
//       csvRows.push(values.join(','));
//     }
  
//     return csvRows.join('\n');
//   }
  
//   // Example usage
//   const data = [
//     { name: "Alice", age: 25, city: "Wonderland" },
//     { name: "Bob", age: 30, city: "Builderland" },
//     { name: "Charlie", age: 35, city: "Chocolate Factory" }
//   ];
  
//   const csvString = arrayToCSV(data);
//   console.log(csvString);
 
//Q.35 Write a JavaScript program to capitalize first letter of a string?
//Ans
// function capitalizeFirstLetter(str) {
//     if (!str) return ''; // Handle empty or null string
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
  
//   // Example usage
//   const example1 = "hello world";
//   const example2 = "javascript";
//   const example3 = "capitalize";
  
//   console.log(capitalizeFirstLetter(example1)); // Hello world
//   console.log(capitalizeFirstLetter(example2)); // Javascript
//   console.log(capitalizeFirstLetter(example3)); // Capitalize
  
//Q. 45 Write a JavaScript program to determine if a variable is array?
//Ans=
// function isArray(variable) {
//     return Array.isArray(variable);
//   }
  
//   // Example usage
//   const example1 = [1, 2, 3];
//   const example2 = { name: "Alice", age: 25 };
//   const example3 = "Hello, world!";
//   const example4 = 42;
  
//   console.log(isArray(example1)); // true
//   console.log(isArray(example2)); // false
//   console.log(isArray(example3)); // false
//   console.log(isArray(example4)); // false
  
//Q.46 Write a JavaScript program to clone an array?
//Ans=
// function cloneArray(arr) {
//     return arr.slice();
//   }
  
//   // Example usage
//   const originalArray = [1, 2, 3, 4];
//   const clonedArray = cloneArray(originalArray);
  
//   console.log(clonedArray); // [1, 2, 3, 4]
//   console.log(originalArray === clonedArray); // false
  

//Q.47 What is the drawback of declaring methods directly in JavaScript objects?
//Ans=
// function Person(name, age) {
//     return {
//       name: name,
//       age: age,
//       greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//       }
//     };
//   }
  
//   const person1 = Person('Alice', 30);
//   const person2 = Person('Bob', 25);
  
//   person1.greet(); // Hello, my name is Alice
//   person2.greet(); // Hello, my name is Bob
  
//   console.log(person1.greet === person2.greet); // false
  
//Q.48 Print the length of the string on the browser console using console.log()?
//Ans=


//     // Declare a string variable
//     const myString = "Hello, world!";

//     // Get the length of the string
//     const stringLength = myString.length;

//     // Print the length to the browser console
//     console.log("The length of the string is:", stringLength);


//Q.49 Change all the string characters to capital letters using toUpperCase() method?
//Ans=

    // // Declare a string variable
    // const myString = "Hello, world!";

    // // Convert the string to uppercase
    // const upperCaseString = myString.toUpperCase();

    // // Print the result to the browser console
    // console.log("The uppercase string is:", upperCaseString);


//Q.50 What is the drawback of declaring methods directly in JavaScript objects?
//Ans=
// function Person(name, age) {
//     return {
//       name: name,
//       age: age,
//       greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//       }
//     };
//   }
  
//   const person1 = Person('Alice', 30);
//   const person2 = Person('Bob', 25);
  
//   person1.greet(); // Hello, my name is Alice
//   person2.greet(); // Hello, my name is Bob
  
//   console.log(person1.greet === person2.greet); // false
  

//Q.51 Write a JavaScript program to get the current date. Expected Output : mm-ddyyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?
//Ans=
    // function formatDate(date, separator) {
    //   const day = String(date.getDate()).padStart(2, '0');
    //   const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    //   const year = date.getFullYear();

    //   return `${month}${separator}${day}${separator}${year}`;
    // }

    // function formatDateReversed(date, separator) {
    //   const day = String(date.getDate()).padStart(2, '0');
    //   const month = String(date.getMonth() + 1).padStart(2, '0');
    //   const year = date.getFullYear();

    //   return `${day}${separator}${month}${separator}${year}`;
    // }

    // const currentDate = new Date();

    // // Format: mm-dd-yyyy
    // const formattedDate1 = formatDate(currentDate, '-');
    // console.log('mm-dd-yyyy:', formattedDate1);

    // // Format: mm/dd/yyyy
    // const formattedDate2 = formatDate(currentDate, '/');
    // console.log('mm/dd/yyyy:', formattedDate2);

    // // Format: dd-mm-yyyy
    // const formattedDate3 = formatDateReversed(currentDate, '-');
    // console.log('dd-mm-yyyy:', formattedDate3);

    // // Format: dd/mm/yyyy
    // const formattedDate4 = formatDateReversed(currentDate, '/');
    // console.log('dd/mm/yyyy:', formattedDate4);

    //Q.52 Use indexOf to determine the position of the first occurrence of a in 30 DaysOf JavaScript?
//Ans=

    // // Define the string
    // const str = "30 Days Of JavaScript";

    // // Find the position of the first occurrence of 'a'
    // const position = str.indexOf('a');

    // // Print the result to the browser console
    // console.log("The position of the first occurrence of 'a' is:", position);

    // Q,53 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days OfJavaScript?
//Ans= 

    // // Define the string
    // const str = "30 Days Of JavaScript";

    // // Find the position of the last occurrence of 'a'
    // const position = str.lastIndexOf('a');

    // // Print the result to the browser console
    // console.log("The position of the last occurrence of 'a' is:", position);

// Q.54 Form Validtion in JS?
//Ans=

//   <form id="myForm">
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name" required>
//     <br><br>

//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email" required>
//     <br><br>

//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password" required>
//     <br><br>

//     <label for="confirmPassword">Confirm Password:</label>
//     <input type="password" id="confirmPassword" name="confirmPassword" required>
//     <br><br>

//     <button type="submit">Submit</button>
//   </form>

//   <script>
//     // Function to validate the form
//     function validateForm(event) {
//       event.preventDefault(); // Prevent the form from submitting

//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
//       const confirmPassword = document.getElementById('confirmPassword').value;

//       let valid = true;

//       // Validate name
//       if (name.trim() === '') {
//         alert('Name is required.');
//         valid = false;
//       }

//       // Validate email
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address.');
//         valid = false;
//       }

//       // Validate password
//       if (password.length < 6) {
//         alert('Password must be at least 6 characters long.');
//         valid = false;
//       }

//       // Validate password confirmation
//       if (password !== confirmPassword) {
//         alert('Passwords do not match.');
//         valid = false;
//       }

//       // If all validations pass, submit the form
//       if (valid) {
//         alert('Form submitted successfully!');
//         document.getElementById('myForm').submit();
//       }
//     }

//     // Attach the validateForm function to the form's submit event
//     document.getElementById('myForm').addEventListener('submit', validateForm);
//   </script>

//Q.55 Form in Email, number, Password, Validation?
//Ans 
//   
//   <form id="myForm">
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email" required>
//     <span id="emailError" class="error"></span>
//     <br><br>

//     <label for="number">Number:</label>
//     <input type="number" id="number" name="number" min="1" max="100" required>
//     <span id="numberError" class="error"></span>
//     <br><br>

//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password" required>
//     <span id="passwordError" class="error"></span>
//     <br><br>

//     <label for="confirmPassword">Confirm Password:</label>
//     <input type="password" id="confirmPassword" name="confirmPassword" required>
//     <span id="confirmPasswordError" class="error"></span>
//     <br><br>

//     <button type="submit">Submit</button>
//   </form>

//   <script>
//     // Function to validate the form
//     function validateForm(event) {
//       event.preventDefault(); // Prevent the form from submitting

//       // Get form elements
//       const email = document.getElementById('email').value;
//       const number = document.getElementById('number').value;
//       const password = document.getElementById('password').value;
//       const confirmPassword = document.getElementById('confirmPassword').value;

//       // Get error elements
//       const emailError = document.getElementById('emailError');
//       const numberError = document.getElementById('numberError');
//       const passwordError = document.getElementById('passwordError');
//       const confirmPasswordError = document.getElementById('confirmPasswordError');

//       // Clear previous error messages
//       emailError.textContent = '';
//       numberError.textContent = '';
//       passwordError.textContent = '';
//       confirmPasswordError.textContent = '';

//       let valid = true;

//       // Validate email
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(email)) {
//         emailError.textContent = 'Please enter a valid email address.';
//         valid = false;
//       }

//       // Validate number
//       if (number < 1 || number > 100) {
//         numberError.textContent = 'Number must be between 1 and 100.';
//         valid = false;
//       }

//       // Validate password
//       if (password.length < 6) {
//         passwordError.textContent = 'Password must be at least 6 characters long.';
//         valid = false;
//       }

//       // Validate password confirmation
//       if (password !== confirmPassword) {
//         confirmPasswordError.textContent = 'Passwords do not match.';
//         valid = false;
//       }

//       // If all validations pass, submit the form
//       if (valid) {
//         alert('Form submitted successfully!');
//         // Optionally submit the form here, or you can remove the preventDefault
//         // document.getElementById('myForm').submit();
//       }
//     }

//     // Attach the validateForm function to the form's submit event
//     document.getElementById('myForm').addEventListener('submit', validateForm);
//   </script>

//Q.56 Dynamic Form Validation in JS?
//Ans=


//Q.57 how many type of JS Event? How to use it ?
//Ans
    //  1: MouseEvent
    //  2:Keyboard Events
    //  3:Form Events 
    //  4:Window Events
    //  5:Touch Event
    
//Q.60 What is Bom vs Dom in JS?
//Ans= DOM: Objects that have to do with the currently loaded page (the page is also called the document) 
//BOM: Objects that deal with everything outside the page (the browser window and the desktop screen)

//Q.61 Array vs object defences in JS?
//Ans  Arrays are best to use when the elements are numbers. Objects are best to use when the elements' strings (text). The data inside an array is known as Elements. The data inside objects are known as Properties which consists of a key and a value.

//Q.62 Split the string into an array using split() Method?
//Ans 



