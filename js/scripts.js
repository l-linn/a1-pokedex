//Immediately Invoked Function Expression (or IIFE) IIFE is a function
let pokemonRepo = (function(){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    function getAll(){
        return pokemonList;
    }

    function add(newPokemon){
        if (
            typeof newPokemon === 'object' && 
            'name' in newPokemon
            ) {
            pokemonList.push(newPokemon);
        } else {
            console.log('Wrong input!')
        };
    }

    function showDetails(pokemon){
        loadDetails(pokemon).then(function(){
          console.log(pokemon);
        });
    }

    function addListItem(item){
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');

        //button.addEventListener('click', () => alert('you clicked the button'));
        button.addEventListener('click', function() {
            showDetails(item);
        });

        button.innerText = item.name;
        button.classList.add('button-class');
        listItem.appendChild(button); //append the button to the list item as its child.
        pokemonList.appendChild(listItem); //append the list item to the unordered list as its child.
    }

    function loadList(){
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function(e){
            console.error(e)
        })
    }

    function loadDetails(item){
        let url = item.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function(details){
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e){
            console.error(e);
        });
    }

    return {//this is an object
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

console.log(pokemonRepo.getAll());

pokemonRepo.loadList().then(function(){
    pokemonRepo.getAll().forEach(function(pokemon){
        pokemonRepo.addListItem(pokemon);
    });
});

//changing color of h1 on mouseover
let button = document.querySelector('h1');
button.addEventListener('mouseover', function(colChange){
    let target = colChange.target;
    target.classList.toggle('color__light');
    target.classList.toggle('color__dark');
});