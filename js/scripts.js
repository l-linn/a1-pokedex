
// name, height, type

let pokemonList = [
    {
        name: 'Lunatone',
        number: '#337',
        height: 1,
        types: ['psychic', 'rock'],
        evolutions: 'none',
    },
    {
        name: 'Kirilia',
        number: '#281',
        height: 0.8,
        types: ['psychic', 'fairy'],
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

console.log(pokemonList);

/*for (i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 0.5 && pokemonList[i].height < 1) {
        document.write(pokemonList[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (pokemonList[i].height === 1) {
        document.write(pokemonList[i].name + ' is 1 meter tall.<br>');
    } else if (pokemonList[i].height < 0.5) {
        document.write(pokemonList[i].name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(pokemonList[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
    };
}*/


/*let i = 0;
while (i < pokemonList.length){
    if (pokemonList[i].height >= 0.5 && pokemonList[i].height < 1) {
        document.write(pokemonList[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (pokemonList[i].height === 1) {
        document.write(pokemonList[i].name + ' is 1 meter tall.<br>');
    } else if (pokemonList[i].height < 0.5) {
        document.write(pokemonList[i].name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(pokemonList[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
    };

    i++;
}*/


// function 
function printListDetails(){
    let i = 0;
do {
    if (pokemonList[i].height >= 0.5 && pokemonList[i].height < 1) {
        document.write(pokemonList[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (pokemonList[i].height === 1) {
        document.write(pokemonList[i].name + ' is 1 meter tall.<br>');
    } else if (pokemonList[i].height < 0.5) {
        document.write(pokemonList[i].name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(pokemonList[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
    };

    i++
}
while (i < pokemonList.length); // 5
};

//print twice
printListDetails();
printListDetails();
