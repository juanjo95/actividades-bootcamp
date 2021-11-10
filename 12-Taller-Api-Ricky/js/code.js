let url_api = 'https://rickandmortyapi.com/api/character';
let api = fetch(url_api);

//let listado_personajes = document.querySelector("#lista-personajes");

api.then(res => res.json())
    .then(personajes => {
        
        for (const personaje of personajes.results) {

            if(personaje.gender === "Male"){
                personaje.gender = "Masculino";
            }else if(personaje.gender === "Female"){
                personaje.gender = "Femenino";
            }

            listado_personajes.innerHTML += `
            <div class="col-sm-12 col-md-4 col-lg-4 card my-2 mx-2 p-0" style="width: 18rem;">
                <img src="${personaje.image}" class="card-img-top" alt="imagen-ricky">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">${personaje.species}</p>
                        <p class="card-text">${personaje.status}</p>
                        <p class="card-text">${personaje.gender}</p>
                    </div>
                    <p class="card-text text-center">${personaje.created}</p>
                </div>
            </div>`
        }

    }).catch(error => console.log(error));