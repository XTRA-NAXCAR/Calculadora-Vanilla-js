import { signos, resultado } from './Operaciones.js';
import { borrar } from './Borrar.js';

const operacion = document.getElementById('js-valor_anterior');
const resultadoDisplay = document.getElementById('js-valor_actual');

const botonesNumeros = document.querySelectorAll('.js-numero');
const botonesOperaciones = document.querySelectorAll('.js-operacion');
const resultadoBoton = document.getElementById('js-resultado');
const salirBoton = document.getElementById ('js-salir');
const delBoton = document.getElementById('js-DEL');
const cBoton = document.getElementById('js-C');

var op_0 = '', op_1 = '', opi= '', opi_2= '', operacion_tpm= '', def = 0, resultado_a = 0;

/**
 * @param {String} op Variable que guarda los valores ingresados
 * @param {String} numero Variable a guardar el textContent de los botones (Numeros)
 * @returns {String} Retorna la concatenación de los numeros ingresados, excepto dos veces '.'
 */
function ingresarValidarNumero(op, numero) { 
    if(op.includes('.') && numero === '.'){                        
        return '';
    }else{
        return numero;
    }
}   

/**
 * Cambia el textContent del Display de la calculadora, según los valores ingresados.
 */
function validarOperacion() { 
    if(op_0 && !operacion_tpm){ 
        operacion_tpm = operacion.textContent;
        operacion.textContent = operacion.textContent + op_1;  
    } else if(op_0 && operacion_tpm){ 
        operacion.textContent = operacion_tpm + op_1;
    } else {
        operacion.textContent = op_1;
    }
}

/**
 * Asigna y concatena el textContent de los numeros a 'op_1'
 */
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', ()=> {  
        op_1 = op_1 + ingresarValidarNumero(op_1, boton.innerText);
        validarOperacion();     
    });
});



/**
 * Resetea todas las variables a un String vació.
 */
function borrarTodo(){
    op_1 = '';
    op_0 = '';
    opi = '';
    opi_2 = '';
    operacion_tpm = '';
    def = 0;
    resultado_a = 0;
    operacion.textContent = '';
    resultadoDisplay.textContent = '';
}

/**
 * Envia al usuario a 'www.google.com'
 */
function salir() {
    location.href = "https://www.google.com/?hl=es&safe=active&ssui=on"
}

/**
 * Función que inicia todos los eventos de escucha
 */
function init() {
    salirBoton.addEventListener('click' , salir, true);
    cBoton.addEventListener('click', borrarTodo,true)

    delBoton.addEventListener('click',() =>{
            let operacionTextContent = operacion.textContent;
            ( { operacionTextContent,
                op_1 } = 
                borrar(op_0, 
                    op_1, 
                    opi,
                    operacion.textContent) );
                    operacion.textContent = operacionTextContent;
                }, 
    true);

    var signo = '';
    botonesOperaciones.forEach(botonOperacion => {
        botonOperacion.addEventListener('click', 
        () => {
            let operacionTextContent = operacion.textContent; 
            signo = botonOperacion.value;
            ( {  operacionTextContent, 
                 op_0, 
                 op_1, 
                 operacion_tpm, 
                 opi, 
                 opi_2, 
                 resultado_a } = 
            signos(operacion.textContent, 
                  op_0, 
                  op_1, 
                  operacion_tpm, 
                  opi, 
                  opi_2, 
                  resultado_a,
                  signo) );
            operacion.textContent = operacionTextContent;
        }, 
        true);
    });
     

    
    resultadoBoton.addEventListener('click' ,
                            () => {
                                let resultadoDisplayTextContent = resultadoDisplay.textContent;
                                ({
                                    resultado_a,
                                    resultadoDisplayTextContent, 
                                    op_0, 
                                    op_1, 
                                    def, 
                                    operacion_tpm, 
                                    resultadoDisplayTextContent
                                } = resultado(resultado_a,
                                    operacion.textContent, 
                                    op_0, 
                                    op_1, 
                                    def, 
                                    operacion_tpm, 
                                    resultadoDisplayTextContent, 
                                    opi,
                                    opi_2) );
                                resultadoDisplay.textContent = resultadoDisplayTextContent; 
                                }, 
                                true);
}

init();