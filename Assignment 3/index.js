let studentNames1 = [];

let studentNames2 = new Array();

let string = ["Rameez", "Smit", "BSCS", "Karachi"]

let numbers = [12, 54, 65, 54, 24, 97]

let boolean = [true, false, true, true, false]

let mixed = ["Rameez", 22, true, "BSCS", 23]

let networks = ["Jazz", "Telenor", "Zong", "Ufone"]

let eduQuli = ["SSC", "HSC", "BS", "BCS", "BCOM", "MS", "M.Phil", "PhD"]
document.write(`1) ${eduQuli[0]}<br>
                2) ${eduQuli[1]}<br>
                3) ${eduQuli[2]}<br>
                4) ${eduQuli[3]}<br>
                5) ${eduQuli[4]}<br>
                6) ${eduQuli[5]}<br>
                7) ${eduQuli[6]}<br>
                8) ${eduQuli[7]}<br>`)

let movies = []
movies.push("Avengers: Age of Ultron")
movies.push("Spectre")
movies.push("Jurrasic World")
movies.push("Inside Out")
document.write(`<h1>Top Movies of 2015</h1>
                1) ${movies[0]}<br>
                2) ${movies[1]}<br>
                3) ${movies[2]}<br>
                4) ${movies[3]}<br><br>
                <b>Length of the array: ${movies.length}</b>`)

let cars = ["Audi", "Volvo", "Ford", "Labmorghini"]
document.write(`<h1>Favorite Cars</h1>
                ${cars}<br><br>
                First index of array: 0<br>
                Car at first index: ${cars[0]}<br>
                Last index of array: 3<br>
                Car at last index: ${cars[3]}`)

let students = ["Michale", "John", "Tony"]
let score = [320, 230, 480]
let totalMarks = 500;
document.write(`Score of ${students[0]} is ${score[0]}. Percentage: ${score[0]/totalMarks*100}<br>
                Score of ${students[1]} is ${score[1]}. Percentage: ${score[1]/totalMarks*100}<br>
                Score of ${students[2]} is ${score[2]}. Percentage: ${score[2]/totalMarks*100}<br>`)

let color = ["Blue", "Green", "Red", "Orange"]
document.write(`${color}<br>`)
let userColorBeg = prompt("Enter the color which you want ot add in the beginning")
color.unshift(userColorBeg)
document.write(`${color}<br>`)
let userColorEnd = prompt("Enter the color which you want ot add in the end")
color.push(userColorEnd)
document.write(`${color}<br>`)
color.unshift("Purple", "Black")
document.write(`${color}<br>`)
color.shift()
document.write(`${color}<br>`)
color.pop()
document.write(`${color}<br>`)
let userIndexIns = prompt("Enter the Index where you want to add the color")
color.splice(userIndexIns, 0, "Pink")
document.write(`${color}<br>`)
let userIndexdel = prompt("Enter the Index where you want to delete the color")
let noOfDel = prompt("How many color do you want to delete")
color.splice(userIndexdel, noOfDel)
document.write(`${color}<br>`)

let studentsScore = [320, 230, 480, 120]
studentsScore.sort()
document.write(studentsScore)

let fruit = ["Strawberry", "Apple", "Orange", "Banana"]
document.write(`<h1>Fruits List:</h1>
                ${fruit}`)
fruit.sort()
document.write(`<h1>Ordered Fruits List:</h1>
                ${fruit}`)

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
document.write(`<h1>Cities</h1>
                ${cities}`)
let selectedCities = cities.slice(2, 4)
document.write(`<h1>Selected Cities</h1>
                ${selectedCities}`)

let arr = ["This", "is", "my", "cat"]
document.write(`<h1>Array:</h1>
                ${arr}<br>
                <h1>String:</h1>
                ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}`)

let devices = [];
devices.push("Keyboard")
devices.push("Mouse")
devices.push("Printer")
devices.push("Monitor")
document.write(`<h1>Devices</h1>
                ${devices}<br>
                Out:<br>
                ${devices.shift()}<br>
                Out:<br>
                ${devices.shift()}<br>
                Out:<br>
                ${devices.shift()}<br>
                Out:<br>
                ${devices.shift()}`)

let devices1 = [];
devices1.push("Keyboard")
devices1.push("Mouse")
devices1.push("Printer")
devices1.push("Monitor")
document.write(`<h1>Devices</h1>
                ${devices1}<br>
                Out:<br>
                ${devices1.pop()}<br>
                Out:<br>
                ${devices1.pop()}<br>
                Out:<br>
                ${devices1.pop()}<br>
                Out:<br>
                ${devices1.pop()}`)

let phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write(`
    <select>
        <option>Select</option>
        <option>${phones[0]}</option>
        <option>${phones[1]}</option>
        <option>${phones[2]}</option>
        <option>${phones[3]}</option>
        <option>${phones[4]}</option>
        <option>${phones[5]}</option>
    </select>`)

let multiArr = [
    [],
    [],
    []
]

let multiarray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
document.write(multiarray)