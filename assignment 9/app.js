// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// function calculatePower() {
//     let base = parseFloat(document.getElementById("base").value);
//     let exponent = parseInt(document.getElementById("exponent").value);
//     let result = power(base, exponent);
//     document.getElementById("result").innerText = "Result: " + result;
// }

// Q2
// function checkLeapYear() {
//     let year = document.getElementById("yearInput").value;
//     let result = "";
    
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         result = year + " is a Leap Year";
//     } else {
//         result = year + " is NOT a Leap Year";
//     }
    
//     document.getElementById("result").innerText = result;
// }

// Q3
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea() {
//     let a = parseFloat(document.getElementById("sideA").value);
//     let b = parseFloat(document.getElementById("sideB").value);
//     let c = parseFloat(document.getElementById("sideC").value);

//     if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
//         alert("Please enter valid positive numbers for all sides.");
//         return;
//     }

//     if (a + b <= c || a + c <= b || b + c <= a) {
//         alert("Invalid triangle: The sum of any two sides must be greater than the third side.");
//         return;
//     }

//     let S = calculateSemiPerimeter(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     document.getElementById("result").innerText = "Area of the triangle: " + area.toFixed(2);
// }

// Q4
// function calculateAverage(marks) {
//     let total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length;
// }

// function calculatePercentage(marks, totalMarksPerSubject = 100) {
//     let total = marks.reduce((sum, mark) => sum + mark, 0);
//     let maxTotal = marks.length * totalMarksPerSubject;
//     return (total / maxTotal) * 100;
// }

// function mainFunction() {
//     let marks = [
//         parseFloat(document.getElementById("subject1").value),
//         parseFloat(document.getElementById("subject2").value),
//         parseFloat(document.getElementById("subject3").value)
//     ];

//     if (marks.some(isNaN)) {
//         document.getElementById("result").innerText = "Please enter valid marks for all subjects.";
//         return;
//     }

//     let average = calculateAverage(marks);
//     let percentage = calculatePercentage(marks);

//     document.getElementById("result").innerText = 
//         `Average Marks: ${average.toFixed(2)}\nPercentage: ${percentage.toFixed(2)}%`;
// }

// Q5

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// function findIndex() {
//     const str = document.getElementById("inputString").value;
//     const char = document.getElementById("searchChar").value;
    
//     if (char.length !== 1) {
//         document.getElementById("result").innerText = "Please enter a single character.";
//         return;
//     }
    
//     const index = customIndexOf(str, char);
//     document.getElementById("result").innerText = `Index: ${index}`;
// }

// Q6
// function removeVowels() {
//     let sentence = document.getElementById("sentence").value;
//     let result = sentence.replace(/[aeiouAEIOU]/g, "");
//     document.getElementById("result").innerText = result;
// }

// Q7
// function countVowelPairs() {
//     let text = document.getElementById("inputText").value.toLowerCase();
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         let pair = text[i] + text[i + 1];
        
//         switch (pair) {
//             case 'aa':
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
//             case 'ea':
//             case 'ee':
//             case 'ei':
//             case 'eo':
//             case 'eu':
//             case 'ia':
//             case 'ie':
//             case 'ii':
//             case 'io':
//             case 'iu':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'oo':
//             case 'ou':
//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//             case 'uu':
//                 count++;
//                 break;
//         }
//     }

//     document.getElementById("result").textContent = "Consecutive vowel pairs count: " + count;
// }

// Q8
// function convertToMeters(km) {
//     return km * 1000;
// }

// function convertToFeet(km) {
//     return km * 3280.84;
// }

// function convertToInches(km) {
//     return km * 39370.1;
// }

// function convertToCentimeters(km) {
//     return km * 100000;
// }

// function convertDistance() {
//     let km = parseFloat(document.getElementById('kmInput').value);
//     if (isNaN(km) || km < 0) {
//         alert("Please enter a valid distance in kilometers.");
//         return;
//     }
    
//     document.getElementById('meters').textContent = `Meters: ${convertToMeters(km)}`;
//     document.getElementById('feet').textContent = `Feet: ${convertToFeet(km)}`;
//     document.getElementById('inches').textContent = `Inches: ${convertToInches(km)}`;
//     document.getElementById('centimeters').textContent = `Centimeters: ${convertToCentimeters(km)}`;
// }


// Q9
// function calculateOvertime() {
//     const regularHours = 40;
//     const overtimeRate = 12;
//     let hoursWorked = parseInt(document.getElementById("hoursWorked").value);
    
//     if (isNaN(hoursWorked) || hoursWorked < 0) {
//         document.getElementById("result").textContent = "Please enter a valid number of hours.";
//         return;
//     }
    
//     let overtimeHours = Math.max(0, hoursWorked - regularHours);
//     let overtimePay = overtimeHours * overtimeRate;
    
//     document.getElementById("result").textContent = `Overtime Pay: Rs. ${overtimePay}`;
// }

// Q10
// function calculateNotes() {
//     let amount = parseInt(document.getElementById("amount").value);
//     if (amount % 10 !== 0) {
//         alert("Please enter an amount in hundreds (multiples of 10)");
//         return;
//     }

//     let hundreds = Math.floor(amount / 100);
//     let remainder = amount % 100;
//     let fifties = Math.floor(remainder / 50);
//     remainder %= 50;
//     let tens = Math.floor(remainder / 10);

//     document.getElementById("result").innerHTML =
//         "100s: " + hundreds + "<br>" +
//         "50s: " + fifties + "<br>" +
//         "10s: " + tens;
// }
