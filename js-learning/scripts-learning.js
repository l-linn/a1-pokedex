
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
    puppy: false,
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
//bracket notation has been used to access the value of each property key of the object dog
Object.keys(dog).forEach(dogProperty => console.log(dog[dogProperty]));

function getDogDescription (dog) {
    return console.log(`My dog is ${dog.type}, he is ${dog.age} years old and his name is ${dog.name}.`);
}

//how to compose functions
function getPupDescription (puppy) {
    return puppy ? 'has puppy' : 'has no puppy';
}
function getAgeDescription (age) {
    return age + ' years old';
}
function getDogDescription (dog) {
    const ageDescription = getAgeDescription(dog.age);
    const pupDescription = getPupDescription(dog.puppy);
    return dog.name + ", " + dog.type + ', ' + ageDescription + ', ' + pupDescription;
}
console.log(getDogDescription(dog));


//below codes are moved from scripts.js
// name, height, type
let pokemonList1 = [
    {
        name: 'Lunatone',
        number: '#337',
        height: 1,
        types: ['psychic', ' rock'],
        evolutions: 'none',
    },
    {
        name: 'Kirilia',
        number: '#281',
        height: 0.8,
        types: ['psychic', ' fairy'],
        evolutions: 'Kirlia evolves into Gardevoir at level 30',
    },
    {
        name: 'Pikachu',
        number: '#25',
        height: 0.4,
        types: ['electric'],
        evolutions: 'Pichu evolves into Pikachu when leveled up with high friendship',
    },
    {
        name: 'Rapidash',
        number: '#78',
        height: 1.7,
        types: ['fire'],
        evolutions: 'Ponyta evolves into Rapidash at level 40',
    }
];

let pokemonList2 = [
    {
        name: 'Pichu',
        number: '#172',
        height: 0.3,
        types: ['electric'],
        evolutions: 'Pichu evolves into Pikachu when leveled up with high friendship',
    },
    {
        name: 'Eevee',
        number: '#133',
        height: 0.3,
        types: ['normal'],
        evolutions: 'Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions',
    },
    {
        name: 'Togekiss',
        number: '#468',
        height: 1.5,
        types: ['fairy',' flying'],
        evolutions: 'Togetic evolves into Togekiss using a stone',
    },
    {
        name: 'Sealeo',
        number: '#364',
        height: 1.1,
        types: ['ice',' water'],
        evolutions: 'Spheal evolves into Sealeo at level 32',
    }
]; 

console.log(pokemonList1);

/* for loop
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 0.5 && pokemonList1[i].height < 1) {
        document.write(pokemonList1[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (pokemonList[i].height === 1) {
        document.write(pokemonList1[i].name + ' is 1 meter tall.<br>');
    } else if (pokemonList1[i].height < 0.5) {
        document.write(pokemonList1[i].name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(pokemonList1[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
    };
}

for loop - while
let i = 0;
while (i < pokemonList.length){
    if (pokemonList[i].height >= 0.5 && pokemonList1[i].height < 1) {
        document.write(pokemonList1[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (pokemonList[i].height === 1) {
        document.write(pokemonList1[i].name + ' is 1 meter tall.<br>');
    } else if (pokemonList1[i].height < 0.5) {
        document.write(pokemonList1[i].name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(pokemonList1[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
    };

    i++;
}

for loop - do while
let i = 0;
do {
    if (pokemonList[i].height >= 0.5 && pokemonList1[i].height < 1) {
        document.write(pokemonList1[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (pokemonList[i].height === 1) {
        document.write(pokemonList1[i].name + ' is 1 meter tall.<br>');
    } else if (pokemonList1[i].height < 0.5) {
        document.write(pokemonList1[i].name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(pokemonList1[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
    };

    i++
}
while (i < pokemonList1.length); // 5
};

*/

/*function printListDetails(){
    let i = 0;
do {
    if (pokemonList1[i].height >= 0.5 && pokemonList1[i].height < 1) {
        document.write(pokemonList1[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (pokemonList[i].height === 1) {
        document.write(pokemonList1[i].name + ' is 1 meter tall.<br>');
    } else if (pokemonList1[i].height < 0.5) {
        document.write(pokemonList1[i].name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(pokemonList1[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
    };

    i++
}
while (i < pokemonList1.length); // 5
};

//print pokemonList1 twice
printListDetails();
printListDetails();
*/

//using input to print any list
function printList(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].height >= 0.5 && list[i].height < 1) {
            document.write(list[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
        } else if (list[i].height === 1) {
            document.write(list[i].name + ' is 1 meter tall.<br>');
        } else if (list[i].height < 0.5) {
            document.write(list[i].name + ' is shorter than 0.5 meter.<br>');
        } else {
            document.write(list[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
        };
    }
};

printList(pokemonList1);
printList(pokemonList2);

//forEach () internal anonymous fuction
pokemonList1.forEach(function(pokemon) {
    document.write(pokemon.name + ', ' + pokemon.height + 'm, ' + 'is ' + pokemon.types + ' type');
});
//arrow function
pokemonList2.forEach(pokemon => document.write(pokemon.name + ', ' + pokemon.height + 'm, ' + 'is ' + pokemon.types + ' type'));
//declair function first
function pokemonDetails(pokemon){
    document.write(pokemon.name + ', ' + pokemon.height + 'm, ' + 'is ' + pokemon.types + ' type');
}
pokemonList1.forEach(pokemonDetails);

//Immediately Invoked Function Expression (or IIFE) IIFE is a function

//Asynchronous Code
function runThisLater(){
    console.log('Burgers');
}
  
console.log('Pizza');
setTimeout(runThisLater, 1000);
console.log('Salad');

let count = 1;
function increaseCount() {
  count = count + 1;
}
setTimeout(function () {

console.log('first call', count);
  increaseCount();
}, 200);
setTimeout(function () {

console.log('second call', count);
  increaseCount();
}, 700);
setTimeout(function () {

console.log('third call', count);
  increaseCount();
}, 500);

function examplePromise(){
    let promiseToReturn = new Promise(function (resolve, reject) {
      let sum;
      setTimeout(function(){
        sum = 5 + 6;
        if(sum > 10) {
          resolve(sum);
        }else{
          reject('The promise has been rejected');
        }     
      }, 2000);
    });
    return promiseToReturn;
}
  
console.log('some piece of code');

examplePromise().then(function(result){
    console.log(result);
  }).catch(function(error){
    console.log(error);
});

console.log('another piece of code');

//switching between colors of h1 on mouseover
/*let button = document.querySelector('.title');
button.addEventListener('mouseover', function(colChange){
    let target = colChange.target;
    target.classList.toggle('color__light');
    target.classList.toggle('color__dark');
});*/

button.addEventListener('click', function(messageShowHide){
    let target = messageShowHide.target;
    target.toggle('appendChild(height)');
    target.toggle('removeChild(height)');
});