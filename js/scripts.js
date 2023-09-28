
// name, height, type

let pokemonList1 = [
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
        types: ['fairy','flying'],
        evolutions: 'Togetic evolves into Togekiss using a stone',
    },
    {
        name: 'Sealeo',
        number: '#364',
        height: 1.1,
        types: ['ice','water'],
        evolutions: 'Spheal evolves into Sealeo at level 32',
    }
];


console.log(pokemonList1);

/*for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >= 0.5 && pokemonList1[i].height < 1) {
        document.write(pokemonList1[i].name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (pokemonList[i].height === 1) {
        document.write(pokemonList1[i].name + ' is 1 meter tall.<br>');
    } else if (pokemonList1[i].height < 0.5) {
        document.write(pokemonList1[i].name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(pokemonList1[i].name + ' is taller than 1 meter - wow that\'s big!<br>');
    };
}*/


/*let i = 0;
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
}*/


// function 
/*function printListDetails(){
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

//print twice
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
