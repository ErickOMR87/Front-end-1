const fetchPokemon = () => {
    const name = document.getElementById("name");
    let pokeInput = name.value.toLowerCase(); 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch (url).then((res) => {
      if (res.status != 200){
           console.log(res);
        imgPoke2 ("./img/Pt.jpg");

       }

       else {
        return res.json( );
       }
        
    }).then((data) => {
        console.log (data);
        let imagen= data.sprites.front_default; 
        console.log(imagen);
        imgPoke2 (imagen);
        let tipo = data.types[0].type.name;
        tipoPoke (tipo);
        let habilidad = data.abilities[1].ability.name;
        habilidadPoke(habilidad);
        let ataque = data.stats[1].base_stat;
        ataquePoke (ataque);
        let defensa = data.stats[2].base_stat;
        defensaPoke (defensa);

    
    })
}



const ataquePoke = (url) => {
    const ataque2 = document.getElementById ("ataque");
    ataque2.value = url;
}

const defensaPoke = (url) => {
    const defensa2 = document.getElementById ("defensa");
    defensa2.value = url;
}

const habilidadPoke = (url) => {
    const habilidad2 = document.getElementById ("habilidad");
    habilidad2.value = url;
}

const tipoPoke = (url) =>{
    const tipo2= document.getElementById ("tipo");
    tipo2.value = url;

}

const imgPoke2 = (url) => {
    const imagen2 = document.getElementById ("imagen");
    imagen2.src = url;
}


