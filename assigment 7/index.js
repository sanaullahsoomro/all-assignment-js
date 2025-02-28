                                                   MATH AND DATE METHODS:

QUESTION : 01

var input = +prompt(`Please Enter Positive Integers`);

var roundOff = Math.round(input);
var floor = Math.floor(input);
var ceil = Math.ceil(input);

document.write(`<h1> Number: ${input} <br>
    Round off Value: ${roundOff} <br>
    Floor Value: ${floor} <br>
    Ceil Value: ${ceil} </h1>`);


QUESTION : 02

var input = +prompt(`Please Enter Negative Integers`);

var roundOff = Math.round(input);
var floor = Math.floor(input);
var ceil = Math.ceil(input);

document.write(`<h1> Number: ${input} <br>
    Round off Value: ${roundOff} <br>
    Floor Value: ${floor} <br>
    Ceil Value: ${ceil} </h1>`);


QUESTION : 03

var input = +prompt(`Please Enter Positive Floating Integers`);

var roundOff = Math.round(input);
var floor = Math.floor(input);
var ceil = Math.ceil(input);

document.write(`<h1> Number: ${input} <br>
    Round off Value: ${roundOff} <br>
    Floor Value: ${floor} <br>
    Ceil Value: ${ceil} </h1>`);


QUESTION : 04

var input = +prompt(`Please Enter Negative Floating Integers`);

var roundOff = Math.round(input);
var floor = Math.floor(input);
var ceil = Math.ceil(input);

document.write(`<h1> Number: ${input} <br>
    Round off Value: ${roundOff} <br>
    Floor Value: ${floor} <br>
    Ceil Value: ${ceil} </h1>`);


QUESTION : 05

var input = +prompt(`Please Enter Any Number`);

var absolute = Math.abs(input);

document.write(`<h1> The Absolute value of ${input} is ${absolute} </h1>`);


QUESTION : 06

var diceValue = Math.floor(Math.random() * 6) + 1;

document.write(`<h1> Your Dice Value: ${diceValue} </h1>`);


QUESTION : 07

var toss = Math.random();

if(toss < 0.5){
    document.write(`<h1> HEADS </h1>`);
}

else{
    document.write(`<h1> TAILS </h1>`);
}


QUESTION : 08

var num = Math.floor(Math.random() * 100) + 1;

document.write(`<h1> Random Numbers Between 1 and 100 is ${num} <h1>`);


QUESTION : 09

var input = +prompt(`Please Eneter Your weight`);

document.write(`<h1> Your weight is: ${input} Kilograms`);


QUESTION : 10

var secret = Math.floor(Math.random() * 10) + 1;

var input = +prompt(`Please Enter Number Between (1 and 10)`);

if(input === secret){
    document.write(`<h1> Congratulation! You guess the correct Number`);
}

else{
    alert(`Sorry You'r Failed Try Again!`);
}


QUESTION : 11

var date = new Date();

document.write(`<h1> ${date} </h1>`);


QUESTION : 12

var date = new Date();

var currentMonth = date.getMonth();

var month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

var monthInwords = month[currentMonth];

document.write(`<h1> Current Month is ${monthInwords} </h1>`);


QUESTION : 13

let currentDate = new Date();

let currentDay = currentDate.toLocaleString("en-us", { weekday: "long" });

let firstThreeLetters = currentDay.slice(0, 3);

alert(firstThreeLetters);


QUESTION : 14

var day = new Date();

var daysName = ["sunday","Saturday"];

var valid = false;

if(daysName.includes(day)){
    alert(It's Fun day);
     valid = true;
     
}
else{
    alert(day)
}


QUESTION : 15

var day = new Date().getMonth();

if(day < 15){
    alert("First fifteen days of the month")
}

else{
alert("Last day of the month")
}


QUESTION : 16

var current = new Date()

var milisecond = current.getTime();

var minute = (1000 * 60 )/ milisecond;

document.write(Current Date : ${current} <br> Elapsed miliseconds since January 1, 1970 : ${milisecond} <br> Elapsed minutes since January 1, 1970 : ${minute});


QUESTION : 17

var currentHours = new Date().getHours();

if(currentHours < 12){
    alert("It;s AM")
}

else{
    alert("It's PM")
}


QUESTION : 18

var laterDate = new Date(2025,11,31);

document.write(Later Date : ${laterDate});


QUESTION : 19

var ramdan2015 = new Date(2015,5,18);

var currentRamdan = new Date(2024,2,11);

var final = currentRamdan - ramdan2015;

var final2 =  final / (1000 * 60 * 60 * 24);

document.write(${Math.floor(final2)} days have passed since 1st Ramdan,2015);


QUESTION : 20

var December = new Date(2015,11,5,22,50,16);

var January = new Date(2015,0,1,0,0,0);

var seconds = December - January;

var final = seconds / 1000;

document.write(On refrence date set ${December} , <br> ${final} seconds had passed since beginning of 2015)

