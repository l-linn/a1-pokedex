let pokemonRepo = (function(){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    function showDetails(item){
        loadDetails(item).then(function(){
            //create img
            let img = document.createElement('img');
            let imgSrc = item.imageUrl; //item.detailsUrl is the link to the image;
            img.src = imgSrc;
            //creat text for pokemon height and weight
            let text = document.createElement('p');
            text.innerHTML = '<p>height: '+item.height+'</p> <p>weight: '+item.weight+'</p> <p>type: '+item.type+'</p>'//why only return the second not all value?
            //modal select the modal container from html
            let modalBody = $('.modal-body');
            let modalTitle = $ ('.modal-title');
            //clear modal content
            modalBody.empty();
            modalTitle.empty();
            //add elements
            modalTitle.append(item.name);
            modalBody.append(img);
            modalBody.append(text);
        });
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
    
    function loadList(){
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                console.log(item);
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                add(pokemon);
            });
        }).catch(function(e){
            console.error(e)
        })
    }

    function loadDetails(addedPokemon){
        let url = addedPokemon.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function(details){
            addedPokemon.imageUrl = details.sprites.front_default;
            addedPokemon.height = details.height;
            addedPokemon.weight = details.weight;
            let typeDetails = details.types;
            console.log(typeDetails);
            typeDetails.forEach(item => {
                let typeName = item.type.name;
                //console.log(typeName);
                addedPokemon.type = typeName;
                console.log(addedPokemon.type);
            });
        }).catch(() => console.error(e));
    }

    function getAll(){
        return pokemonList;
    }

    function addListItem(item){
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group');
        listItem.classList.add('col-md-3');
        listItem.classList.add('col-xl-2');
        listItem.classList.add('col-sm-4');
        listItem.classList.add('col-6');
        let button = document.createElement('button');
        button.innerText = item.name;

        //Button trigger modal
        button.classList.add('btn-warning');
        button.classList.add('btn');
        button.setAttribute('data-toggle','modal');
        button.setAttribute('data-target','#exampleModal');

        pokemonList.append(listItem);
        listItem.append(button);
       
        button.addEventListener('click', () => showDetails(item));
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

pokemonRepo.loadList().then(function(){
    pokemonRepo.getAll().forEach(function(pokemon){
        pokemonRepo.addListItem(pokemon);
    });
});

(function(){
    let bgColorChange = document.querySelector('.navbar-brand');
    let bg = document.querySelector('ul');

    bgColorChange.addEventListener('mouseover', () => {
        bg.classList.toggle('first-color');
        bg.classList.toggle('second-color');
    });
})();
