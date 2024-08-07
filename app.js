//El selector es para que yo pueda seleccionar un h1 o etc porque existen reglas para seleccionar, siempre va a estar con nosotros el selector
//Titulo es un objeto
//Recuerda que el parametro debemos siempre de asignarlo dentro de una variable
//Esta variale es mas compleja porque es un objeto(tiene metodos q definen su comportammiento), aqui va a tener texto q nosotros colocamos
//let titulo = document.querySelector('h1'); //Dentro del parametro, el parametro q espera es cual va a ser el selector q vamos a usar para acceder
//titulo.innerHTML = 'Juego del número secreto';  //Con este metodo, con la llamada podemos definir un titulo

//le pido al documert, hay el selector
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10 :)';

//Botones de interactividad q permiten al usuario poder enviar acciones(eventos)
//El codigo no se escribe en archivo HTML, ahi solo van funciones 
//Funcion: Proceso q realiza una tarea/bloque de codigo y puede o no retonar un valor, mi funcion lleva parentesis
//En HTML la mando a la funcion que vamos a definirla y declararla en nuestro JS
//La funcion es un encapsulamiento de una accion de lo q quieres q realice
//Declaracion de funcion
//Podria ser automatizado para no estar declarando el Document
//PARAMETROS= comportamiento de la funcion te va a modificar de acuerdo alo q reciba pq no va a tener una etiqueta de manera fija, lo recibe cuando es

//function asignarTextoElemento() {
    //let titulo = document.querySelector('h1');
    //titulo.innerHTML = 'Juego del número secreto actualizado';
//}


//elemento html que queremos modificar e incerirle un texto y un texto efefctivo
//nustra funcion puede recibir parametros y la podemos reutilizar n veces
//ASIGNA TEXTO A UN ELEMENTO HTML

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto); 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Si JS ve que hay funciones, entonces las deja declaradas en cualquier lugar
//concepto HOISTING

//Se va a capturar lo q el usuario coloca
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //va a retronar si es string, boleano, entero
    //console.log(typeof(numeroDeUsuario));
    
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario == numeroSecreto);
    //si acerto q porfavro le muestre un mensaje al usuario     
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //se queda deshabilitado y solo cuando usuario finalice, podra hacer un nuevi juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteo todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    } else {
        //Si el numero generado esta incluido en la lista 
        //include barre si mi numero ya fue seleccionado
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }

    }

    //return numeroSecreto;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja, restart
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero intentos
    condicionesIniciales();

    //intentos = 1;
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}


//Resucimos la funcion q hahe lo q yo quiero
//Eliminamos esa declaracion de variables y llamada al document, se encapsulo dentro de una funcion
//Se invoca la funcion 2 veces una para h1 y otra para p, estos cambios demuestran mas profesionalismo, orden
//y facilita la manera cuando se trabaja a medida q el trabajo crece

//Pra llamar a la funcion se necesita el nombre y los parentesis, en JS lo puedes hacer cuando esta fuera de
//los parentesis

condicionesIniciales();