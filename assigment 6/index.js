                                

//QUESTION: 01

// var firstName = prompt("Please Enter Your First Name");
// var lastName = prompt("Please Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// document.write(<h1> ${fullName} </h1>);


//QUESTION: 02

// var name = prompt("Please Enter Your Favorite Mobile Name");
// document.write(<h1> My Favorite Mobile is : ${name} </h1> <br> <b> Length Of String </b> + " " + name.length + "<br>");


// </br></br>
// QUESTION : 03

var city = `Pakistan`;
document.write(`<h1> String: ${city} </h2>` + ` <h1> <br> Index of 'n': ${city.indexOf(`n`)} </h1>`);


//QUESTION : 04

var name =  `Hello World`;
document.write(`<h1> String: ${name} </h1>` + `<h1> <br> Last Index of 'l': ${name.lastIndexOf(`l`)} </h1>`);


//QUESTION : 05

var name = `Pakistan`;
document.write(`<h1> String: ${name} </h1>` + `<h1> <br> Character at Index 3: ${name.charAt(3)} </h1>`);


// QUESTION : 06

var firstName = prompt("Please Enter Your First Name");
var lastName = prompt("Please Enter Your Last Name");
var fullName = firstName + " " + lastName;
document.write(<h1> ${fullName} </h1>);


// QUESTION : 07

var city = `Hydrabad`;
var change = city.replace("Hydr", "Islam");

document.write(`<h1> City: ${city} </h1>` + `<br> <h1> After Replacement: ${change} </h1>`);


// QUESTION : 08

var message = `Ali and Sami are best friends. They play cricket and football together.`;
var change = message.replace("and", "&");

document.write(`<h1> Before changing: </h1>` + `<br> <h2> ${message} </h2>` + `<br>`);
document.write(`<h1> After changing: </h1>` + `<br> <h2> ${change} </h2>`);


// QUESTION : 09

var num = 472;
var num2 = `472`;

document.write(`<h1> Value: ${num} </h1>` + `<br>
    <h2> Type: ${typeof num2} </h2>` + `<br>
    <h1> Value: ${num} </h1>` + `<br>
    <h2> Type: ${typeof num} </h2>`);


// QUESTION : 10

var input = prompt(`Please Enter Any URL`);

document.write(`<h1> URL: ${input} </h1>` + `<br>
    <h1> DOMAIN: ${input.slice(4)} </h1>`);


// QUESTION : 11

var input = prompt(`Please Enter Any Word`);
var upper = input.toUpperCase();

document.write(`<h1> User Input: ${input} </h1>` + `<br>
    <h1> Upper Case: ${upper} </h1>`);


// QUESTION : 12

var input = prompt(`Please Enter Any Word In Cpaital Letters`);
var lower = input.toLowerCase();

document.write(`<h1> User Input: ${input} </h1>` + `<br>
    <h1> Upper Case: ${lower} </h1>`);


// question : 13

var input = prompt(`Please Enter Any Word`);
var upper = input.slice(0,1).toUpperCase();
var lower = input.slice(1).toLowerCase();

document.write(`<h1> User Input: ${input} </h1>` + `<br>
    <h1> Title Case: ${upper + lower} </h1>`);


// QUESTION : 14

var num = `35.36`;
var change = num.replace(`.`, ``);

document.write(`<h1> Number: ${num} </h1>` + `<br>
    <h1> Result: ${change} </h1>`);


// QUESTION : 15

var a = `3`;
var b = `3`;
var x = a + b;

document.write(`<h1> a is ${a} </h1>` + `<br>
    <h1> b is ${b} </h1>` + `<br>
    <h1> a + b is ${x} </h1>`);


// QUESTION : 16

var a = 3;
var b = 3;
var x = a - b;

document.write(`<h1> a is ${a} </h1>` + `<br>
    <h1> b is ${b} </h1>` + `<br>
    <h1> a + b is ${x} </h1>`);


// QUESTION : 17

var userName = prompt("Please enter a username");

if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
    alert("Valid username");
}
else {
    alert("Please enter a valid username");
}






