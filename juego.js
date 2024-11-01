//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"¿Cuál es su nombre completo?",
        opcionA:"Octavio Diaz",
        opcionB:"Octavio Ernesto Diaz",
        opcionC:"Octavio Sallei Diaz",
        opcionD:"Lotacho Octapus Poncharelo",
        correcta:"c"
    },
    {
        id:2,
        categoria:"general",
        titulo:"¿Cuántos años cumple?",
        opcionA:"18",
        opcionB:"10",
        opcionC:"58",
        opcionD:"17",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"¿Cómo figura en Instagram?",
        opcionA:"octtaaavio",
        opcionB:"Poncharelo",
        opcionC:"Octapus",
        opcionD:"Octa el más crack",
        correcta:"a"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿Dónde Vive?",
        opcionA:"La Paz",
        opcionB:"Paris",
        opcionC:"Al lado de Messi",
        opcionD:"En un publito muy lejano",
        correcta:"a"
    },
    {
        id:5,
        categoria:"general",
        titulo:"¿Dónde se va de viaje?",
        opcionA:"Miami a visitar a Messi",
        opcionB:"México",
        opcionC:"Maipu",
        opcionD:"Nicargua",
        correcta:"b"
    },
    {
        id: 6,
        categoria: "musica",
        titulo: "¿En su casa escucha?",
        opcionA: "El Chaqueño Palavecino ",
        opcionB: "Lo de hoy es un pibe moderno",
        opcionC: "Maddona",
        opcionD: "Luna Rosa. Le encanta escuchar a su mamá, no solo cuando le da consejos sino tambien tirando flow",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "musica",
        titulo: "¿Como se llama el Rap que creo de pequeño?",
        opcionA: "Mi tio tiene frio",
        opcionB: "Pollito frito",
        opcionC: "Tapate con la capa de tu tio",
        opcionD: "Pollito pio pio",
        correcta: "d"
    },
    {
        id: 8,
        categoria: "musica",
        titulo: "¿El cumpleañero canta?",
        opcionA: "Solo en las fiestas, queda afónico",
        opcionB: "En la ducha y en las fiestas",
        opcionC: "En la ducha",
        opcionD: "No es lo de él",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "musica",
        titulo: "¿Cuál es su canción más reproducida?",
        opcionA: "El farolito",
        opcionB: "La Morocha",
        opcionC: "505",
        opcionD: "Terapia de Choque",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "musica",
        titulo: "¿Cuál es su músico favorito?",
        opcionA: "Mon Laferte",
        opcionB: "Duki",
        opcionC: "Myke towers",
        opcionD: "La Joaqui",
        correcta: "c"
    },
    {
        id: 11,
        categoria: "deportes",
        titulo: "¿Qué deporte hace?",
        opcionA: "Fútbol",
        opcionB: "Voley",
        opcionC: "Golf",
        opcionD: "Tenis",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "deportes",
        titulo: "La SCALONETA le regalo una copa para su cumpleaños¿En qué fecha fue?",
        opcionA: "18 de diciembre de 2022",
        opcionB: "18 de diciembre de 2001",
        opcionC: "18 de diciembre de 1999",
        opcionD: "18 de diciemre de 1920",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "deportes",
        titulo: "¿De qué equipo es Hincha?",
        opcionA: "Boca",
        opcionB: "Godoy Cruz",
        opcionC: "River",
        opcionD: "Racing",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "deportes",
        titulo: "¿Cuál es el jugador de futbol que admira de pequeño?",
        opcionA: "Neymar",
        opcionB: "Messi",
        opcionC: "Mbappé",
        opcionD: "Di María",
        correcta: "a"
    },
    {
        id: 15,
        categoria: "deportes",
        titulo: "¿Va al gimnasio?",
        opcionA: "No, entrena los tubos limpiando la casa de la abuela",
        opcionB: "Claro que si, ese físico se trabaja",
        opcionC: "No, ese físico lo heredo",
        opcionD: "Si, a veces",
        correcta: "b" 
    },

    {
        id: 16,
        categoria: "peliculas",
        titulo: "¿Cuál es el nombre de su película favorita?",
        opcionA: "Río",
        opcionB: "El rey león",
        opcionC: "SpiderMan",
        opcionD: "Batman ",
        correcta: "a"
    },
    {
        id: 17,
        categoria: "peliculas",
        titulo: "¿Qué programa no le faltaba para almorzar ?",
        opcionA: "Betty la Fea",
        opcionB: "Los Simspson",
        opcionC: "Casados con Hijos",
        opcionD: "La Niñera",
        correcta: "b"
    },
    {
        id: 18,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película que lo hizo llorar?",
        opcionA: "Up",
        opcionB: "IT",
        opcionC: "Siempre a tu lado",
        opcionD: "Siempre el mismo día",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "peliculas",
        titulo: "¿Cuál es la primera película que fue a ver al cine?",
        opcionA: "Toy Story 3",
        opcionB: "Mi villano favorito",
        opcionC: "Como entrenar a tu dragón",
        opcionD: "Enredados",
        correcta: "a"
    },
    {
        id: 20,
        categoria: "peliculas",
        titulo: "¿Cuál es la serie que más le gusta?",
        opcionA: "The Office",
        opcionB: "DR HOSE",
        opcionC: "Black List",
        opcionD: "Brakin Bad",
        correcta: "a"
    }
]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 4){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})