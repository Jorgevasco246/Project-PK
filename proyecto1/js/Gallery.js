const galeria = document.querySelector("#galeria");
const TOTAL_POKEMON = 153;

function createCard(name, imageURL, tipos, index) {
  var div = document.createElement("div");
  div.classList.add("pokem");

  var nombre = document.createElement("h3");
  nombre.textContent = name.charAt(0).toUpperCase() + name.slice(1);

  var imagen = document.createElement("img");
  imagen.src = imageURL;
  imagen.alt = name;

  var descripcion = document.createElement("p");
  
  var tiposTexto = "";
  for (var i = 0; i < tipos.length; i++) {
    if (i > 0) tiposTexto += "/";
    tiposTexto += tipos[i];
  }
  
  descripcion.textContent = name + " is a " + tiposTexto + " type Pokémon.";

  var botonInfo = document.createElement("button");
  botonInfo.textContent = "More information";
  botonInfo.onclick = function() {
    var pokemonSeleccionado = {
      id: index,
      nombre: name.charAt(0).toUpperCase() + name.slice(1)
    };
    localStorage.setItem("pokemonSeleccionado", JSON.stringify(pokemonSeleccionado));
    window.location.href = "producto.html";
  };

  var botonFav = document.createElement("button");
  botonFav.textContent = "Add to favorites";
  botonFav.classList.add("favoritos");

  botonFav.onclick = function() {
    var favoritos = JSON.parse(localStorage.getItem("pokemonFavoritos")) || [];
    var yaEstaEnFavoritos = false;
    
    for (var i = 0; i < favoritos.length; i++) {
      if (favoritos[i].id === index) {
        yaEstaEnFavoritos = true;
        break;
      }
    }
    
    if (!yaEstaEnFavoritos) {
      var pokemonFavorito = {
        id: index,
        nombre: name,
        imagen: imageURL,
        tipos: tiposTexto
      };
      
      favoritos.push(pokemonFavorito);
      localStorage.setItem("pokemonFavoritos", JSON.stringify(favoritos));
      alert("¡Pokémon agregado a favoritos!");
    } else {
      alert("¡Este Pokémon ya está en tus favoritos!");
    }
  };

  div.appendChild(imagen);
  div.appendChild(nombre);
  div.appendChild(descripcion);
  div.appendChild(botonInfo);
  div.appendChild(botonFav);
  return div;
}

for (var index = 1; index <= TOTAL_POKEMON; index++) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + index)
    .then(function(res) { return res.json(); })
    .then(function(pokemon) {
      var tipos = [];
      for (var i = 0; i < pokemon.types.length; i++) {
        tipos.push(pokemon.types[i].type.name);
      }
      
      var card = createCard(
        pokemon.name,
        pokemon.sprites.other['official-artwork'].front_default,
        tipos,
        pokemon.id
      );
      
      galeria.appendChild(card);
    })
    .catch(function(error) {
      console.error("Error al obtener Pokémon:", error);
    });
}
// BUSCADOR
const searchInput = document.querySelector("#Buscador");

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const pokemonCards = document.querySelectorAll('.pokem');
    
    pokemonCards.forEach(card => {
        const pokemonName = card.querySelector('h3').textContent.toLowerCase();
        if (pokemonName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});