var num1 = parseInt(prompt("Enter First Number"))
var num2 = parseInt(prompt("Enter Second Number"))
alert(`Sum of ${num1} and ${num2} is ${num1 + num2}`)

alert(`Result of Subtraction ${num2} from ${num1} is ${num1 - num2}`)

alert(`Result of Multipling ${num1} and ${num2} is ${num1 * num2}`)

alert(`Result of Division ${num1} by ${num2} is ${num1 / num2}`)

alert(`Reminder of Division ${num1} by ${num2} is ${num1 % num2}`)

var number;
document.write("Value after Declaration is ", number)
number = 3;
document.write("<br>Initial Value: ", number)
++number;
document.write("<br>Value after increment is ", number)
number = number + 7;
document.write("<br>Value after addition is ", number)
--number;
document.write("<br>Value after decrement is ", number)
number = number % 3
document.write("<br>The remainder is ", number)

var ticketPrice = 600;
document.write(`Total cost to buy 5 Tickets to a movie is ${ticketPrice * 5} PKR`)

document.write(`4 x 1 = ${4*1}<br>
                4 x 2 = ${4*2}<br>
                4 x 3 = ${4*3}<br>
                4 x 4 = ${4*4}<br>
                4 x 5 = ${4*5}<br>
                4 x 6 = ${4*6}<br>
                4 x 7 = ${4*7}<br>
                4 x 8 = ${4*8}<br>
                4 x 9 = ${4*9}<br>
                4 x 10 = ${4*10}<br>`)

var celsius = 12;
var fahrenheit;
fahrenheit = (celsius * 9/5) + 32
document.write(`${celsius}&deg;C is ${fahrenheit}&deg;F<br>`)
celsius = (fahrenheit - 32) * 5/9
document.write(`${fahrenheit}&deg;C is ${celsius}&deg;F<br>`)

var p1 = 560
var p2 = 200
var q1 = 2
var q2 = 5
var sc = 150
document.write(`Price of item 1 is ${p1}<br>
                Quantity of item 1 is ${q1}<br>
                Price of item 2 is ${p2}<br>
                Qantity of item 2 is ${q2}<br><br>
                Shipping Charges is ${sc}<br><br>
                Total cost of your order is ${p1*q1 + p2*q2 + sc} PKR`)

var totalmarks = parseInt(prompt("Enter Total marks"))
var obtainedmarks = parseInt(prompt("Enter Obtained marks"))
var percentage = obtainedmarks/totalmarks * 100
document.write(`Total Marks: ${totalmarks}<br>
                Obtained Marks: ${obtainedmarks}<br>
                Percentage: ${percentage}`)

var dollars = 10;
var riyals = 25;
var pkr;
pkr = dollars*104 + riyals*28
document.write(`<h1>Currency in PKR</h1>
                Total currency in PKR: ${pkr}`)

var number_ = -2.6666666666666650;
number_ = (((number_ + 5) * 10) / 2)
alert(number_)

var current_year = 2025;
var birth_year = 2004;
document.write(`They are either ${current_year - birth_year} or ${current_year - birth_year + 1} years old`)

var raduis = 12;
var circumference = 2 * raduis * 3.142
var area = raduis * raduis * 3.141;
document.write(`Radius of a circle: ${raduis}<br>
                The Circumference is: ${circumference}<br>
                The area is: ${area}`)

var a = 10;
document.write(`Result:<br>
                The value of a is: ${a}<br>
                ....................................<br><br>
                The value of ++a is: ${++a}<br>
                Now the value of a is: ${a}<br><br>
                The value of a++ is: ${a++}<br>
                Now the value of a is: ${a}<br><br>
                The value of --a is: ${--a}<br>
                Now the value of a is: ${a}<br><br>
                The value of a-- is: ${a--}<br>
                Now the value of a is: ${a}`)

var a1 = 2, b1 = 1;
var result = --a1 - --b1 + ++b1 + b1--;
/* Explain
--a;
1
--a - --b
1   -  0
--a - --b + ++b
1   -  0  +  1
--a - --b + ++b + b--
1   -  0  +  1  +  1
result = 3 */
document.write(`a is ${a1}<br>
                b is ${b1}<br>
                result is ${result}`)

var favoriteSnack = "Sooper Biscuts"
var currentAge = 22;
var estimatedAge = 70;
var amountOfSnackPerDay = 2;
var totalSnack = (((estimatedAge - currentAge) * 365) * amountOfSnackPerDay)
document.write(`You will need ${totalSnack} ${favoriteSnack} to last until the ripe old age of ${estimatedAge}`)