const galeria = document.querySelector("#galeria");

function createCard(name, imageURL, tipos, index) {
  const div = document.createElement("div");
  div.classList.add("pokem");

  const nombre = document.createElement("h3");
  nombre.textContent = `${name.charAt(0).toUpperCase() + name.slice(1)}`;

  const imagen = document.createElement("img");
  imagen.src = imageURL;
  imagen.alt = name;

  const descripcion = document.createElement("p");
  descripcion.textContent = `${name} is a ${tipos.join('/')} type Pokémon.`;

  const botonInfo = document.createElement("button");
  botonInfo.textContent = "More information";
  botonInfo.onclick = () => {
    // Guardar la información del Pokémon seleccionado en localStorage
    const pokemonSeleccionado = {
      id: index,
      nombre: name.charAt(0).toUpperCase() + name.slice(1),
      tipo: tipos
    };
    localStorage.setItem("pokemonSeleccionado", JSON.stringify(pokemonSeleccionado));
    window.location.href = "producto.html";
  };

  const botonFav = document.createElement("button");
  botonFav.textContent = "Add to favorites";
  botonFav.classList.add("favoritos");

  div.append(imagen, nombre, descripcion, botonInfo, botonFav);
  return div;
}

for (let index = 1; index <= 15; index++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then(res => res.json())
    .then(pokemon => {
      const tipos = pokemon.types.map(t => t.type.name);
      const card = createCard(
        pokemon.name,
        pokemon.sprites.other['official-artwork'].front_default,
        tipos,
        index
      );
      galeria.appendChild(card);
    })
    .catch(error => console.error("Error al obtener Pokémon:", error));
}