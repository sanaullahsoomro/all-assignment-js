// Q1
// function showDateTime() {
//     const now = new Date();
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
//     const formattedDateTime = now.toLocaleString('en-US', options);
//     document.getElementById("datetime").textContent = formattedDateTime;
// }

// showDateTime();

// setInterval(showDateTime, 1000);

// Q2
// function greetUser() {
//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     let fullName = firstName + " " + lastName;
//     document.getElementById("greeting").innerText = "AOA " + fullName + " Thank you";
// }

// Q3
// function addNumbers() {
//     let number1 = parseFloat(document.getElementById("num1").value);
//     let number2 = parseFloat(document.getElementById("num2").value);
    
//     if (isNaN(number1) || isNaN(number2)) {
//         document.getElementById("result").innerText = "Please enter valid numbers.";
//     } else {
//         let sum = number1 + number2;
//         document.getElementById("result").innerText = "Sum: " + sum;
//     }
// }

// Q4
// function calculate() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     let operator = document.getElementById("operator").value;
//     let result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//             break;
//         default:
//             result = 'Invalid operator';
//     }

//     document.getElementById("result").textContent = result;
// }

// Q5
// function squareNumber() {
//     let num = document.getElementById('numberInput').value;
//     let squared = num * num;
//     document.getElementById('result').textContent = squared;
// }

// Q6
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// function calculateFactorial() {
//     let num = document.getElementById("numberInput").value;
//     num = parseInt(num);
//     if (isNaN(num) || num < 0) {
//         document.getElementById("result").innerText = "Invalid input";
//     } else {
//         document.getElementById("result").innerText = factorial(num);
//     }
// }

// Q7
// function displayCounting() {
//     let start = parseInt(document.getElementById("start").value);
//     let end = parseInt(document.getElementById("end").value);
//     let output = document.getElementById("output");
    
//     if (isNaN(start) || isNaN(end)) {
//         output.innerHTML = "Please enter valid numbers.";
//         return;
//     }
    
//     let result = "";
//     if (start <= end) {
//         for (let i = start; i <= end; i++) {
//             result += i + " ";
//         }
//     } else {
//         for (let i = start; i >= end; i--) {
//             result += i + " ";
//         }
//     }
    
//     output.innerHTML = result;
// }


// Q8
// function calculateHypotenuse() {
//     let base = parseFloat(document.getElementById("base").value);
//     let perpendicular = parseFloat(document.getElementById("perpendicular").value);
    
//     if (isNaN(base) || isNaN(perpendicular)) {
//         document.getElementById("result").innerText = "Please enter valid numbers.";
//         return;
//     }

//     function calculateSquare(num) {
//         return num * num;
//     }

//     let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     document.getElementById("result").innerText = "Hypotenuse: " + hypotenuse.toFixed(2);
// }

// Q9
 
//  function calculateArea(width, height) {
//     return width * height;
// }

// let area1 = calculateArea(5, 10); 
// console.log("Area (Method 1 - Values):", area1);

// let w = 7;
// let h = 3;
// let area2 = calculateArea(w, h); 
// console.log("Area (Method 2 - Variables):", area2);

// function calculateAreaFromInput() {
//     let width = parseFloat(document.getElementById("width").value);
//     let height = parseFloat(document.getElementById("height").value);
    
//     if (!isNaN(width) && !isNaN(height)) {
//         let area = calculateArea(width, height);
//         document.getElementById("result").innerText = `Area: ${area}`;
//     } else {
//         document.getElementById("result").innerText = "Please enter valid numbers.";
//     }
// }


// Q10
// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// function checkPalindrome() {
//     const input = document.getElementById("textInput").value;
//     const result = isPalindrome(input);
//     document.getElementById("result").innerText = result ? "It's a palindrome!" : "Not a palindrome.";
// }

// Q11
// function capitalizeWords() {
//     let str = document.getElementById("inputString").value;
//     let capitalizedStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//     document.getElementById("output").textContent = capitalizedStr;
// }

// Q12
// function findLongestWord() {
//     let str = document.getElementById("inputString").value;
//     let words = str.split(" ");
//     let longestWord = words.reduce((longest, currentWord) => 
//         currentWord.length > longest.length ? currentWord : longest, "");
    
//     document.getElementById("output").innerText = "Longest word: " + longestWord;
// }

// Q13
// function countLetterOccurrences(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// function countOccurrences() {
//     let str = document.getElementById("inputString").value;
//     let letter = document.getElementById("inputLetter").value;
    
//     if (letter.length !== 1) {
//         document.getElementById("result").innerText = "Please enter a single letter.";
//         return;
//     }

//     let count = countLetterOccurrences(str, letter);
//     document.getElementById("result").innerText = `The letter '${letter}' appears ${count} times in the given string.`;
// }

// Q14
// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     alert("The circumference is " + circumference.toFixed(2));
// }

// function calcArea(radius) {
//     let area = Math.PI * Math.pow(radius, 2);
//     alert("The area is " + area.toFixed(2));
// }

// function calculate() {
//     let radius = parseFloat(document.getElementById("radius").value);
//     if (!isNaN(radius) && radius > 0) {
//         calcCircumference(radius);
//         calcArea(radius);
//     } else {
//         alert("Please enter a valid positive number for radius.");
//     }
// }