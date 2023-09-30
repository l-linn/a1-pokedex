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
        return pokemonList
    }

    function add(newPokemon) {
        return newPokemon
    }

    return {//this is an object
        getAll: getAll,
        add: add
    }
})()

console.log(pokemonRepo.getAll());
pokemonRepo.getAll().forEach(pokemon => document.write(pokemon.name + ', ' + pokemon.height + 'm, ' + 'is ' + pokemon.types + ' type<br>'));

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

pokemonRepo.getAll().forEach(heightLoop);

