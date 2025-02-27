var givennum = +prompt("Enter a number")
if (givennum % 3 == 0) {
    alert("The number is divisible by 3")
}
else{
    alert("The number is not divisible by 3")
}

var num5 = +prompt("Enter a number")
if (num5 % 2 == 0) {
    alert("Number is Even")
}
else{
    alert("Number is odd")
}

var age = +prompt("Enter your age")
if (age > 18){
    alert("Old enough")
}
else{
    alert("Too young")
}

var myName = "Rameez";
var userName = prompt("Enter your name:");
if (userName === myName) {
  alert(`Hello, ${myName}! Nice to see you.`);
}

var number = parseInt(prompt("Enter a number:"));
switch (number % 3) {
  case 0:
    alert("Number is divisible by 3");
    break;
  default:
    alert("Number is not divisible by 3");
    break;
}

var character = prompt("Enter a character (Number or string)")
if (character.charCodeAt(0) >= 48 && character.charCodeAt(0) <=57) {
  alert("It is a number")
}
else if (character.charCodeAt(0) >=65 && character.charCodeAt(0) <= 90) {
  alert("It is a uppercase letter")
}
else if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
  alert("It is a lowercase letter")
}
else{
  alert("It is other character")
}

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var operator = prompt("Enter operator")
switch (operator) {
  case "+":
    alert(`${num1} + ${num2} = ${num1 + num2}`)
    break;
  case "-":
    alert(`${num1} - ${num2} = ${num1 - num2}`)
    break;
  case "*":
    alert(`${num1} * ${num2} = ${num1 * num2}`)
    break;
  case "/":
    alert(`${num1} / ${num2} = ${num1 / num2}`)
    break;
  default:
    alert("Invalid Operator")
    break;
}

var time = +prompt("Enter what time is it")
if (time >= 0 && time < 1200) {
  alert("Good Moarning")
}
else if (time >= 1200 && time < 1700) {
  alert("Good afternoon")
}
else if (time >= 1700 && time < 2100) {
  alert("Good evening")
}
else if (time >= 2100 && time < 2400) {
  alert("Good night")
}
else{
  alert("Invalid time")
}

var year = +prompt("Enter year")
if (year%4 == 0) {
  alert(`${year} is a leap year`)
}
else{
  alert(`${year} is not leap year`)
}

var password = "Rameez"
var userPassword = prompt("Enter your Password")
if (userPassword == "") {
  alert("Please enter password")
}
else if (password == userPassword) {
  alert("Correct! The password you entered matches the original password")
}
else{
  alert("Incorrect password! This password is used by user2342")
}

var firstName = "Ali";
if (firstName === "Fahad") {
document.write("Hello Fahad!");
}
else{
  document.write("You are not Fahad")
}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

var number1 = +prompt("Enter first number")
var number2 = +prompt("Enter second number")
if (number1 > number2) {
    alert(`The greater number of ${number1} and ${number2} is ${number1}`)
}
if (number2 > number1) {
    alert(`The greater number of ${number1} and ${number2} is ${number2}`)
}
else{
    alert("Both numbers are equal")
}

var num3 = +prompt("Enter a number")
if (num3 >= 0){
    alert("Positive Number")
}
else{
    alert("Negative Number")
}

var time = +prompt("Enter what time is it")
if (time >= 6 && time <= 9) {
  alert("Breakfast is served")
}
else if (time >= 11 && time <= 13) {
  alert("Time for lunch")
}
else if (time >= 17 && time < 20) {
  alert("Its dinner time")
}
else{
  alert("sorry you'll have to wait, or go get a snack.")
}

var value = prompt("Enter a value")
if (!isNaN(value) && value.trim() !== "") {
  alert(`${value} is a number`)
}
else if (value == "true" || value == "false") {
  alert(`${value} is a boolean`)
}
else if ((typeof(value)) == "string") {
  alert(`${value} is a string`)
}
else{
  alert("It is other value")
}

var char = prompt("Enter a character")
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
  alert("it is a vowel")
}
else{
  alert("It is not vowel")
}

10 != 8

var month = +prompt("Enter the number of the month", 8)
switch (month) {
  case 1:
    alert("January")
    break;
  case 2:
    alert("Feberuary")
    break;
  case 3:
    alert("March")
    break;
  case 4:
    alert("April")
    break;
  case 5:
    alert("May")
    break;
  case 6:
    alert("June")
    break;
  case 7:
    alert("July")
    break;
  case 8:
    alert("August")
    break;
  case 9:
    alert("September")
    break;
  case 10:
    alert("October")
    break;
  case 11:
    alert("November")
    break;
  case 12:
    alert("December")
    break;

  default:
    alert("Invalid Month")
    break;
}

var age = prompt("Enter your age:");
var voteable = age < 18 ? "Too young" : "Old enough";
alert(`You are ${voteable} to vote.`);
