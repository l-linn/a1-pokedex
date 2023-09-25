
//alert ("Hello, you've entered a construction site, but you are safe.");

let myLover = 'Craig';

console.log (myLover);

myLover = 'Diego';

document.write(myLover);

let craig = 'sausage';

document.write(craig);

let linAge = 28;
let craigAge = 45;

document.write(craigAge - linAge);

//data types - primitive - strings

let text = 'We are going to New York for Xmas';

document.write(text);

let escapedText = "I said \"No thanks.\""

document.write(escapedText);

//concatenating strings

document.write('My cat\'s name is ' + myLover + '.');

document.write('2' + 2);
document.write('2' + '2');
document.write(2 + 2);
document.write(parseInt ('2') + 2);

let myName = 'John';
let welcomeMessage1 = "Hello, I'm";
let welcomeMessage2 = 'and I say to you: "Hello!"';
document.write(welcomeMessage1 + ' ' + myName + ' ' + welcomeMessage2);

document.write(`${welcomeMessage1} ${myName} ${welcomeMessage2}`);


myName = 'Lin';
let myAge = 28;
document.write(`My name is ${myName}, and I'm ${myAge} years old.`);


//complex data type - object

let pet = {
    color: 'black',
    type: 'cat',
    age: 3,
    gender: 'male',
    poo: 'stinky',
};

console.log(pet.color);
document.write(pet.color);

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
document.write(mixedArray); //why does it prints [object Object]
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
    document.write(i);
}

for (let i = 77; i>=0; i--) {
    document.write(i);
}

let ages = [20, 30, 25, 22, 31];
for (let i = 0; i < ages.length; i++) {
    document.write(ages[i] - 2);
}


