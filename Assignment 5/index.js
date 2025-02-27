var username = prompt(`Please Enter Your Name`);
var want = Number(prompt(`How Many Passwords Do You Want?`)); // Convert to number
var length = Number(prompt(`Please Enter Length Of Your Password`)); // Convert to number

var capitalStr = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var smallStr = `abcdefghijklmnopqrstuvwxyz`;
var num = `0123456789`;
var specialCharacter = `!@#$%^&*+_`;

var final = capitalStr + num + smallStr + specialCharacter;

document.write(`<h1> Congratulations! ${username} </h1> <br> 
<h2> We have created ${want} password(s) for you: </h2> <br>`);

// Generate multiple passwords
for (let j = 1; j <= want; j++) {
    let match = ``;
    for (let i = 0; i < length; i++) { 
        match += final[Math.floor(Math.random() * final.length)];
    }
    document.write(`<b>${j}.</b> ${match} <br>`);
}
