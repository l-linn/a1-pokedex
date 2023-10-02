//Immediately Invoked Function Expression (or IIFE) IIFE is a function
let pokemonRepo = (function(){
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
    ]

    function getAll() {
        return pokemonList;
    }

    function add(newPokemon) {
        if (
            typeof newPokemon === 'object' && 
            'name' in newPokemon &&
            'height' in newPokemon &&
            'types' in newPokemon
            ) {
            pokemonList.push(newPokemon);
        } else {
            console.log('Wrong input!')
        };
    }

    function addListItem (item){
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = item.name;
        button.classList.add('button-class');
        listItem.appendChild(button); //append the button to the list item as its child.
        pokemonList.appendChild(listItem); //append the list item to the unordered list as its child.
    }

    return {//this is an object
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    }
})()

console.log(pokemonRepo.getAll());

//pokemonRepo.getAll().forEach(pokemon => document.write(pokemon.name + ', ' + pokemon.height + 'm, ' + 'is ' + pokemon.types + ' type<br>'));
/*
function heightLoop(item){
    if (item.height >= 0.5 && item.height < 1) {
        document.write(item.name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (item.height === 1) {
        document.write(item.name + ' is 1 meter tall.<br>');
    } else if (item.height < 0.5) {
        document.write(item.name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(item.name + ' is taller than 1 meter - wow that\'s big!<br>');
    };
};
*/
//pokemonRepo.getAll().forEach(heightLoop);

let newPokemon = {
    name: 'Sealeo',
    number: '#364',
    height: 1.1,
    types: ['ice',' water'],
    evolutions: 'Spheal evolves into Sealeo at level 32',
}

pokemonRepo.add(newPokemon); //pokemonRepo.getAll().push(newPokemon) gets the same result
pokemonRepo.add(177);

pokemonRepo.getAll().forEach(function (item) {
    pokemonRepo.addListItem(item)
/*
    if (item.height >= 0.5 && item.height < 1) {
        document.write(item.name + ' is shorter than 1 meter but higher than 0.5 meter.<br>');
    } else if (item.height === 1) {
        document.write(item.name + ' is 1 meter tall.<br>');
    } else if (item.height < 0.5) {
        document.write(item.name + ' is shorter than 0.5 meter.<br>');
    } else {
        document.write(item.name + ' is taller than 1 meter - wow that\'s big!<br>');
    };
*/
});
