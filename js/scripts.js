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
          //let pokemonHeight = pokemon.height;
          //document.write(pokemonHeight); this opens a new window
        });
    }

    function addListItem(item){

        loadDetails(item).then(function(){
            let img = document.createElement('img');
            let imgSrc = item.imageUrl; //item.detailsUrl is the link to the image;
            img.src = imgSrc;
            img.classList.add('img-class');
            listItem.appendChild(img);
        })

        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        //if I want to add multipul items inside the button:
        //let name = document.createElement('p');
        //name.innerText = item.name;//display pokemon's name
        //name.classList.add('name-class');
        //button.appendChild(name);

        button.innerText = item.name;
        button.classList.add('button-class');
        pokemonList.appendChild(listItem); //append the list item to the unordered list as its child.
        listItem.appendChild(button); //append the button to the list item as its child.
        //button.addEventListener('click', () => alert('you clicked the button'));
        button.addEventListener('click', () => showDetails(item));
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
                //console.log(pokemon); logs all added pokemons
            });
        }).catch(function(e){
            console.error(e)
        })
    }

    function loadDetails(addedPokemon){
        let url = addedPokemon.detailsUrl; //.detailsUrl is created in loadList dunction as a key, to get the url in each pokemon object
        return fetch(url).then(function(response){// to fetch the url inside each pokemon object
            //console.log(response);
            return response.json();//this returns a promise
        }).then(function(details){
            addedPokemon.imageUrl = details.sprites.front_default;
            addedPokemon.height = details.height;
            addedPokemon.types = details.types;
        }).catch(() => console.error(e));
    }

    return {//this is an object
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

//console.log(pokemonRepo.getAll());

pokemonRepo.loadList().then(function(){
    pokemonRepo.getAll().forEach(function(pokemon){
        pokemonRepo.addListItem(pokemon);
    });
});

//changing color of h1 on mouseover
/*let button = document.querySelector('.title');
button.addEventListener('mouseover', function(colChange){
    let target = colChange.target;
    target.classList.toggle('color__light');
    target.classList.toggle('color__dark');
});*/