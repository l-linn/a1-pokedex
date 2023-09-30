
//alert ("Hello, you've entered a construction site, but you are safe.");

let myLover = 'Craig';
console.log (myLover);

myLover = 'Diego';
console.log(myLover);

let craig = 'sausage';
console.log(craig);

let linAge = 28;
let craigAge = 45;
console.log(craigAge - linAge);

//data types - primitive - strings

let text = 'We are going to New York for Xmas';
console.log(text);

let escapedText = "I said \"No thanks.\""
console.log(escapedText);

//concatenating strings

console.log('My cat\'s name is ' + myLover + '.');
console.log('2' + 2);
console.log('2' + '2');
console.log(2 + 2);
console.log(parseInt ('2') + 2);

let myName = 'John';
let welcomeMessage1 = "Hello, I'm";
let welcomeMessage2 = 'and I say to you: "Hello!"';
console.log(welcomeMessage1 + ' ' + myName + ' ' + welcomeMessage2);
console.log(`${welcomeMessage1} ${myName} ${welcomeMessage2}`);

myName = 'Lin';
let myAge = 28;
console.log(`My name is ${myName}, and I'm ${myAge} years old.`);

//complex data type - object

let pet = {
    name: 'diego',
    color: 'black',
    type: 'cat',
    age: 3,
    gender: 'male',
    poo: 'stinky',
};

console.log(pet.color);
console.log(pet.color);

delete pet.poo;
console.log(pet.poo);
pet.poo = 'normal';
console.log(pet.poo);

let currentUserName = 'Lin'
let userAges = {
    Craig: 45,
    Diego: 3,
};

userAges[currentUserName] = 28;
console.log(userAges[currentUserName]);

//arrays

userAges = [28, 45, 3];
console.log(userAges[2]); //output is 3

let mixedArray = [1, {type: 'cat'}, userAges];
console.log(mixedArray); //why does it prints [object Object]
console.log(mixedArray);
console.log(mixedArray[1]);
console.log(mixedArray[2][1]);
console.log(mixedArray.length); //functions using dot

let diego = pet;
console.log(diego);
pet.color = 'dark-brown'; 
console.log(diego); //diego.color changes to dark-brown as well 

// conditionals

let day = 'Sunday';
if (day === 'Sunday') {
    console.log('Let\'s have sunday dinner in a pub.');
} else if (day  === 'Saturday') {
    console.log('Maybe we can have pies?');
} else {
    console.log('We should save money and cook dinner oursleves.');
} // no semicolons after this

// === equal value 1 === 1 is true, 1 ==='1' is faulse
// == equal content 1 == '1' is true.
// !== not equal 
// !ture = false

let a = [1, 2, 3];
let b = a;
let c = [1, 2, 3];

console.log(a === b); // true
console.log(a === c); // false

/*if (userInput = ' ') {// empty string is 
    document.write('User said something');
} else {
    document.write('You need to wirte something!');
}*/

let userInput = '';

if (userInput) {
    document.write ('empty string is treated as false in JS');
}

console.log(Boolean(userInput)); // false remeber to use capital B for Boolean to work otherwise it will say 'boolean is undefined'.
console.log(Boolean(!userInput)); // true

// && and || or

let weather = 'sunny';
let mood = 'good';
let food = null;
let goingOut = weather && mood;
console.log(goingOut); //good the last truthy value
weather = '';
goingOut = food && weather;
console.log(goingOut); //null the first falsy value
goingOut = weather && food;
console.log(goingOut); // empty

weather = 'sunny';

goingOut = weather || mood; 
console.log(goingOut); // sunny, first truthy value

// if (condition) equals if (condition === true)

let gender = 'male';
let result = gender === 'male' ? 'Diego is a boy' : 'Not Diego';
console.log(result);

for (let i = 1; i<=77; i++) {
    console.log(i);
}

for (let i = 77; i>=0; i--) {
    console.log(i);
}

let ages = [20, 30, 25, 22, 31];
for (let i = 0; i < ages.length; i++) {
    console.log(ages[i] - 2);
}

//functions

function greeting(firstName, lastName) { //parameters
    console.log('Hi, my name is ' + firstName + ' ' + lastName + '.');
    console.log('Hi, my name is ' + firstName + ' ' + lastName + '.');
}
//call a function
greeting('Lin', 'Shi');//arguments

function math(val1, val2) {
    return val1 + val2;
}

let answer = math(4, 9);
console.log(answer);

let sum = function add (num1, num2) { //Assigning a function to a variable
    return num1 + num2;
};

//add won't be recoginised as a funciton, but sum will

console.log(sum(7,19));

let age = 28;
function twoYearsLater (age) { // this age is a parameter, it can be anything
   age = age + 2;
    return age;
}

console.log(twoYearsLater(age)); // this age is the variable 
console.log(age);

//return statement
function divide(dividend, divisor){
    if (divisor === 0) {
        return 'You are trying to divide by zero.';
    } else {
        let result = dividend / divisor;
        return result;
    }
}

console.log(divide(45, 9));

//a function without a return statement
function add(number1, number2) {
    console.log(number1 + number2);// 3 is logged
}

let result2 = add(1, 2);
console.log(result2) // undefined, `result` is assigned what is returned by `add(1, 2)`, which is `undefined` (default return value)

//a function with a return statement
function multiply(number1, number2) {
    return number1 * number2;
}
let result3 = multiply(3, 5);
console.log(result3); // 15 is logged

//scope of variables
let x = 5; // x is defined on a globle scope

function foo(){
  let y = 10; // y is defined within a function
  console.log("From inside foo(): x = " + x);
  console.log("From inside foo(): y = " + y);
}

foo();
console.log("From outside foo(): x = " + x);
//console.log("From outside foo(): y = " + y); // error - y is not defined

//fuction hoisting 
//function is called AFTER its declaration
function displayHello() {
    return "Hello World";
}
  
console.log(displayHello());
  
//function is called BEFORE its declaration
console.log(displayHi());
  
function displayHi() {
    return "Hi There";
}

//Assigning a function to a variable, order matters
sum = function add (num1, num2) {
    return num1 + num2;
};
console.log(sum(8,4));

// Assigning a function to an object property
let person = {};

person.tellMyAge = function() {
  return 42
}; // need this semicolon

// the this keyword

let dog = {
    type: 'labrador',
    age: 8,
    name: 'Dabai',
    speak: function() {
      console.log('Wooff! I am ' + this.name);
    }
};
//What if you wanted to teach your dog object not just to bark, but also to tell you its age or name
dog.speak();
let allProperties = Object.keys(dog);
console.log(allProperties);

//Similar to alert(), prompt() will open up a window and allow the user to input some text
/*
let logIn = prompt('Please enter your name!');
console.log(logIn);

let isAccepted = confirm('Do you accept?');
console.log(isAccepted);
*/
//dialog-type functions - alert(), confirm(), prompt()

let names = ['Lin', 'Craig', 'Diego'];
names.push('Bob'); // Add to the end of the array
names.unshift('Julia'); // Add to the start of the array (as new first item)
names.pop(); // Remove the LAST item from the array (Bob)
names.shift(); // Remove the FIRST item from the array (Julia)
names.reverse(); //change the array to D C L
console.log(names.indexOf('Lin'));

let namesCopy = names.slice();


//forEach () method better than traditional for loop
//forEach methos has to take a fuction as an argument 

//external fuction
ages.forEach(logToConsole);
function logToConsole(item) {
    console.log(item);
}
//internal anonymous fuction
ages.forEach(function(item) {
    console.log(item);
});
//arrow function
ages.forEach((item, index) => console.log(item, index));

//forEach() method and Object.keys()
Object.keys(dog).forEach(dogKey => console.log(dogKey));
Object.keys(dog).forEach(dogProperty => console.log(dog[dogProperty]));


