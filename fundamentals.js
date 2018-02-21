// NOTE: Make sure to use the `var` keyword for ALL variable declarations.

// #1: Create an array of strings called `colors` that contains three colors.
// Type your solution immediately below this line:
var colors = [ 'blue', 'red', 'yellow']


// #2: Access the last item in the array and assign to a variable called `lastColor`.
// Type your solution immediately below this line:
var lastColor = colors[2]


// #3: Create an empty array called `favoriteColors`.
// Type your solution immediately below this line:
var favoriteColors = []



// #4: Create a `for` loop that adds each string in `colors` to `favoriteColors`.
// Type your solution immediately below this line:
for (let i = 0; i < colors.length; i++) {
    favoriteColors.push(colors[i]) 
};


// #5: Create an object literal called `student` that contains three key-value pairs.
// Type your solution immediately below this line:
var student = {
    name: "Frank",
    age: "50",
    class: "WDI"
};


// #6: Add a `attends-office-hours` (spelled exactly) property to `student` by accessing
// it (do not change the original object you typed above) and assigning it
// a boolean value.
// Type your solution immediately below this line:
student.attends_office_hours = 'true';

// I know I was supposed to use 'attends-office-hours' but whenever I put quotes around the new property it would give and unexpected string error.