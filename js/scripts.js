//Immediately Invoked Function Expression (or IIFE) IIFE is a function
let pokemonRepo = (function(){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    let modalContainer = document.querySelector('#modal-container');

    function showDetails(item){
        loadDetails(item).then(function(){
            //create img
            let img = document.createElement('img');
            let imgSrc = item.imageUrl; //item.detailsUrl is the link to the image;
            img.src = imgSrc;
            img.classList.add('img-class');

            //creat text for pokemon height
            let text = document.createElement('p');
            //text.innerText = item.name + ' is ' + item.height +'cm tall' +' and weights ' + item.weight + 'gm.';//display pokemon's height
            text.innerHTML = '<p>'+item.name+'</p> <p>height: '+item.height+'</p> <p>weight: '+item.weight+'</p>'
            text.classList.add('text-class');

            modalContainer.innerHTML = '';

            let modal = document.createElement('div');
            modal.classList.add('modal'); //add class name modal to the div just created

            let closeButton = document.createElement('button');
            closeButton.classList.add('modal-close');
            closeButton.innerText = 'Close';
            closeButton.addEventListener('click', hideModal);

            modal.appendChild(img);
            modal.appendChild(text);
            modal.appendChild(closeButton);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');

            function hideModal(){
                modalContainer.classList.remove('is-visible');
            }

            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
                    hideModal();
                }
            });

            modalContainer.addEventListener('click', (e) => {
                let target = e.target;
                if (target === closeButton){
                    hideModal();
                } else if (target === modalContainer && target !== modal){
                    alert('There is a close button!');
                }
            })
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
        }).then(function(details){//adding details
            addedPokemon.imageUrl = details.sprites.front_default;
            addedPokemon.height = details.height;
            addedPokemon.types = details.types;
            addedPokemon.weight = details.weight;
        }).catch(() => console.error(e));
    }

    function getAll(){
        return pokemonList;
    }

    function addListItem(item){
        /*loadDetails(item).then(function(){
            let img = document.createElement('img');
            let imgSrc = item.imageUrl; //item.detailsUrl is the link to the image;
            img.src = imgSrc;
            img.classList.add('img-class');
            listItem.appendChild(img);
            let height = document.createElement('p');
            height.innerText = 'is ' + item.height +'m tall';//display pokemon's height
            height.classList.add('height-class');
            //button.addEventListener('click', () => button.appendChild(height));
            //button.addEventListener('mouseover', () => height.parentElement.removeChild(height));

            button.addEventListener('click', () => {
                if(button.contains(height)){
                    height.parentElement.removeChild(height);
                }else {
                    button.appendChild(height);
                }
            });
        })*/

        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item')
        let button = document.createElement('button');
        button.innerText = item.name;

        // fetch(item.detailsUrl).then(function(response){// to fetch the url inside each pokemon object
        //     //console.log(response);
        //     return response.json();//this returns a promise
        // }).then(function(details){//adding details
        //     button.innerHTML = '<img src="'+details.sprites.front_default+'"> <span class="img-text">'+item.name+'</span>';
        // }).catch(() => console.error(e));

        button.classList.add('btn-info');
        button.classList.add('btn');
        pokemonList.appendChild(listItem); //append the list item to the unordered list as its child.
        listItem.appendChild(button); //append the button to the list item as its child.
       
        //button.addEventListener('click', () => alert('you clicked the button'));
        button.addEventListener('click', () => showDetails(item));
    }

    return { //this is an object
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


/*You could also opt to implement the following functionality:

Display a loading message while data is being loaded. 
To do this, implement a showLoadingMessage() and hideLoadingMessage() function, 
which appends/removes a message to your page. 
Hint #1: showLoadingMessage() should be the first thing executed inside both the LoadList() and loadDetails() functions. 
Hint #2: hideLoadingMessage() should be executed in the then and catch blocks of the fetch code of both LoadList() and loadDetails(). 
This makes sense because once you’re inside then or catch, it means you’ve received the response from the fetch code and can hide the loading message.*/