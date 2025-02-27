var name1 = prompt("Please enter your Name")
alert("Hi, " +  name1)

var n = +prompt("Enter a number", 5)
document.write(`${n} x 1 = ${n*1}<br>
                ${n} x 2 = ${n*2}<br>
                ${n} x 3 = ${n*3}<br>
                ${n} x 4 = ${n*4}<br>
                ${n} x 5 = ${n*5}<br>
                ${n} x 6 = ${n*6}<br>
                ${n} x 7 = ${n*7}<br>
                ${n} x 8 = ${n*8}<br>
                ${n} x 9 = ${n*9}<br>
                ${n} x 10 = ${n*10}`)

var city = prompt("Please enter your city")
if(city == "Karachi" || city == "karachi"){
    alert("Welcome to city of light")
}
else{
    alert("Wellcome to pakistan")
}

var gender = prompt("Enter your gender")
if(gender == "Male" || gender == "male"){
    alert("Good Morning Sir")
}
else{
    alert("Good Morning Ma'am")
}

var light = prompt("Enter traffic light eg Red, Green , Yellow")
if (light == "Red") {
    alert("vehicles must stop")
}
else if(light == "Green"){
    alert("vehicles can move now")
}
else if (light == "Yellow"){
    alert("vehicles should get ready to move")
}

var maxAge = +prompt("Enter max age")
var currentAge = +prompt("Enter Current age")
if (currentAge <= maxAge){
    alert("You are wellcome")
}

var fuel = parseFloat(prompt("Enter the remaning feul in car (in liters)"))
if (fuel < 0.25){
    alert("Please refill the fuel in your car")
}
else{
    alert("Enjoy you have sufficent fuel.")
}

var a = 4;
if (++a == 5){
alert("given condition for variable a is true");
}
output 
True

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// output 
// Given-condition-is-true

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// output 
// condition 2 and 4 is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// output 
// The cost equals

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
output
true

if("car" < "cat"){
    alert("car is smaller than cat");
    }
// output
// it runs

var sub1 = +prompt("Enter Computer Marks")
var sub2 = +prompt("Enter Math Marks")
var sub3 = +prompt("Enter Science Marks")
var total = +prompt("Enter Total Marks")
var obtainMarks = sub1 + sub2 + sub3
var percentage = obtainMarks/total * 100
var grade;
var remarks;
if (percentage >= 80){
    grade = "A-one"
    remarks = "Excellent"
}
else if (percentage >= 70){
    grade = "A"
    remarks = "Good"
}
else if (percentage >= 60){
    grade = "B"
    remarks = "You need to improve"
}
else if (percentage < 60){
    grade = "Fail"
    remarks = "Sorry"
}
document.write(`
    <h1>Marks Sheet</h1><br>
    Total  Marks: ${total}<br>
    Marks Obtained: ${obtainMarks}<br>
    Percentage: ${percentage}<br>
    Remarks: ${remarks}
    `)

var item1 = prompt("Enter the name of first product")
var item1Price = +prompt("Enter the price of " + item1)
var qty1 = +prompt(`How many ${item1} do you want to buy`)
var item2 = prompt("Enter the name of second product")
var item2Price = +prompt("Enter the price of " + item2)
var qty2 = +prompt(`How many ${item2} do you want to buy`)
var item3 = prompt("Enter the name of third product")
var item3Price = +prompt("Enter the price of " + item3)
var qty3 = +prompt(`How many ${item3} do you want to buy`)
var  shhippingcharges = 150
var totalPrice = (qty1 * item1Price) + (qty1 * item1Price) + (qty1 * item1Price)
var discount = 0;
if (totalPrice >= 2000){
    discount = totalPrice/100 * 10
}
document.write(`<h1>Shopping Cart</h1>
                Price of ${item1} is ${item1Price}<br>
                Quantity of ${item1} is ${qty1}<br>
                Price of ${item2} is ${item2Price}<br>
                Quantity of ${item2} is ${qty2}<br>
                Price of ${item3} is ${item3Price}<br>
                Quantity of ${item3} is ${qty3}<br><br>
                Shipping Charges is ${shhippingcharges}<br><br>
                Total Cost of your order is ${totalPrice} PKR<br>
                Discounted Price is ${discount}`)

var secretnum = 7
var usernum = +prompt("Guess the secrete number")
if (usernum == secretnum){
    alert("Bingo! Correct answer")
}
else if (usernum == secretnum + 1 || usernum == secretnum -1){
    alert("Close enough to the correct answer.")
}
else{
    alert("Better luck, Try again")
}

var givennum = +prompt("Enter a number")
if (givennum % 3 == 0) {
    alert("The number is divisible by 3")
}
else{
    alert("The number is not divisible by 3")
}

var team1 = +prompt("Enter the score of Team 1")
var team2 = +prompt("Enter the score of Team 2")
if(team1 > team2){
    alert("Team 1 won!")
}
else if (team2 > team1) {
    alert("Team 2 won!")
}
else{
    alert("Tie")
}

var _number = +prompt("Enter a number")
var _string = prompt("Enter a string")
var _boolean = prompt("Enter a Boolean")
alert(`${_number} is a ${typeof(_number)}`)
alert(`${_string} is a ${typeof(_string)}`)
alert(`${_boolean} is a ${typeof(_boolean)}`)

var num5 = +prompt("Enter a number")
if (num5 % 2 == 0) {
    alert("Number is Even")
}
else{
    alert("Number is odd")
}

var temperature = prompt("Enter the today's Temperature")
if (temperature >= 40){
    alert("Its too hot outside.")
}
else if (temperature >= 30) {
    alert("The Weather today is Normal.")
}
else if (temperature >= 20) {
    alert("Today's Weather is cool.")
}
else if (temperature >= 10) {
    alert("OMG! Today's weather is so Cool.")
}
else{
    alert("There is fault with your thermometer, Please check the temperature again")
}

var calcnum1 = +prompt("Enter first number")
var calcnum2 = +prompt("Enter second number")
var operator = prompt("Enter Operator")
if (operator == "+") {
    alert(`${calcnum1} + ${calcnum2} = ${calcnum1 + calcnum2}`)
}
else if (operator == "-") {
    alert(`${calcnum1} - ${calcnum2} = ${calcnum1 - calcnum2}`)
}
else if (operator == "*") {
    alert(`${calcnum1} * ${calcnum2} = ${calcnum1 * calcnum2}`)
}
else if (operator == "/") {
    alert(`${calcnum1} / ${calcnum2} = ${calcnum1 / calcnum2}`)
}
else{
    alert("Invalid Operator!")
}

var day = prompt("Enter today's day name")
if (day == "Monday" || day == "Tuesday" || day == "Wednessday" || day == "Thursday" || day == "Friday") {
    alert("It's a weak day")
}
else if (day == "Saturday"){
    alert("It's a weakend")
}
else if (day == "Sunday"){
    alert("Yeah! It's a holiday")
}

var userscore = +prompt("Enter your score")
if (userscore > 50){
    alert("You are passed")
}
else{
    alert("Try again!")
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

var langcode = prompt("Enter the language code (eg: en, es, de)")
if (langcode == "en"){
    alert("Hello world")
}
else if (langcode == "es"){
    alert("Hola, Mundo")
}
else  if (langcode == "de"){
    alert("Hallo, Welt")
}
else{
    alert("Invalid language code")
}

var num3 = +prompt("Enter a number")
if (num3 >= 0){
    alert("Positive Number")
}
else{
    alert("Negative Number")
}

var num4 = +prompt("Enter a number")
var noun = prompt("Enter a noun")
alert(`${num4} ${noun}`)