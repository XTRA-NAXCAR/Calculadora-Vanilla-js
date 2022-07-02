import {operar} from './Operar.js';
function init() {
    del.addEventListener('click', borrar1, true);
    C.addEventListener('click', borrar, true);
    multiplicacion.addEventListener('click', multi, true);
    divicion.addEventListener('click', div, true);
    sumar.addEventListener('click',sum,true);
    resta.addEventListener('click',rest,true);
    salir_b.addEventListener('click' , salir, true)
    resul.addEventListener('click' , res, true)
}

const operacion = document.getElementById('js-valor_anterior');
const resultado = document.getElementById('js-valor_actual');
const botones_numeros = document.querySelectorAll('.js-numero');

var multiplicacion = document.getElementById('js-multiplicacion');
var divicion = document.getElementById('js-divicion');
var sumar = document.getElementById('js-sumar');
var resta = document.getElementById('js-resta');
var resul = document.getElementById('js-resultado');
var porcentaje = document.getElementById('js-porcentaje');
var salir_b = document.getElementById ('js-salir');

var del = document.getElementById('js-DEL');
var C = document.getElementById('js-C');




var op_0 = '';
var op_1 = '';
var opi = '';
var opi_2 = '';
var operacion_tpm = '';
var def = 0;
var resultado_a = 0;

function ingresar_validar_numero(op, numero) { 
    if(op.includes('.') && numero === '.'){                        
        return '';
    }else{
        return numero;
    }
}   


function validar_operacion() { 
    if(op_0 && !operacion_tpm){       
        operacion_tpm = operacion.textContent;
        operacion.textContent = operacion.textContent + op_1;  
    } else if(op_0 && operacion_tpm){ 
        operacion.textContent = operacion_tpm + op_1;
    } else {
        operacion.textContent = op_1;
    }
}

botones_numeros.forEach(boton => {
    boton.addEventListener('click', ()=> {  
        op_1 = op_1 + ingresar_validar_numero(op_1, boton.innerText);
        validar_operacion();     
    });
});




function borrar1()
{
    if (op_0 && !opi && !op_1) {
        op_0 = op_0.slice(0,-1);
        operacion.textContent = operacion.textContent.slice(0,-1);
    }
    if (op_0 && opi && !op_1) {
        opi = opi.slice(0,-3);
        operacion.textContent = operacion.textContent.slice(0,-3);
    }
    if (op_0 && opi && op_1) {
        op_1 = op_1.slice(0,-1);
        operacion.textContent = operacion.textContent.slice(0,-1);
    }
    if (op_1 && !opi && !op_0) {
        op_1 = op_1.slice(0,-1);
        operacion.textContent = operacion.textContent.slice(0,-1);
    }
}


function borrar(){
    op_1 = '';
    op_0 = '';
    opi = '';
    opi_2 = '';
    operacion_tpm = '';
    def = 0;
    resultado_a = 0;
    operacion.textContent = '';
    resultado.textContent = '';
}

function multi(){
    if (op_0 && op_1) {
        operacion.textContent = operar(resultado_a, op_0, op_1, opi, opi_2);  
        op_1 = operacion.textContent; 
        op_0 = '';
        operacion_tpm = '';
        opi = opi_2;
        opi_2 = '';
        multi();
    } else if (!operacion.textContent.includes('*')) {
        opi = ' * ';
        opi_2 = ' * '; 
        if (operacion.textContent.includes ('/') || operacion.textContent.includes ('+') || operacion.textContent.includes ('-')) {
            operacion.textContent = operacion.textContent.slice(0,-3);
        }
        operacion.textContent = operacion.textContent + opi;
        op_0 = operacion.textContent;
        op_1 = '';
    } else {
        swal({
            title: 'Ya has seleccionado la Multiplicación más de una vez seguida, podrias seleccionar otras operaciones como:',
            text: 'Divición, Suma o Resta :)',
            icon: 'error'
        });
    }
}


/**
 * Description:
 * variable: opi - {Type}, descripcion
 * params: param_1 - {Type}, description:
 * return: resultado - {Type}, description:
 */
function div() {
    if (op_0 && op_1) {
        operacion.textContent = operar(resultado_a, op_0, op_1, opi, opi_2);  
        opi = opi_2;
        opi_2 = '';
        op_1 = operacion.textContent; 
        op_0 = '';
        operacion_tpm = '';
        div();
    } else if (!operacion.textContent.includes('/')) {
        opi = ' / ';
        opi_2 = ' / ';
        if (operacion.textContent.includes ('*') || operacion.textContent.includes ('+') || operacion.textContent.includes ('-')) {
            operacion.textContent = operacion.textContent.slice(0,-3);
        }
        operacion.textContent = operacion.textContent + opi;
        op_0 = operacion.textContent;
        op_1 = '';
    } else {
        swal({
            title: 'Ya has seleccionado la Divición más de una vez seguida, podrias seleccionar otras operaciones como:',
            text: 'Multiplicación, Suma o Resta :)',
            icon: 'error'
        });
    }
}


function sum(){
    if (op_0 && op_1) {
        opi_2 = '';
        operacion.textContent = operar(resultado_a, op_0, op_1, opi, opi_2);  
        opi = opi_2;
        opi_2 = '';
        op_1 = operacion.textContent; 
        op_0 = '';
        operacion_tpm = '';
        sum(); 
    } else if (!operacion.textContent.includes('+')) {
        opi = ' + ';
        opi_2 = ' + ';
        if (operacion.textContent.includes ('*') || operacion.textContent.includes ('/') || operacion.textContent.includes ('-')) {
            operacion.textContent = operacion.textContent.slice(0,-3);
        }
        operacion.textContent = operacion.textContent + opi;
        op_0 = operacion.textContent;
        op_1 = '';
    } else {
        swal({
            title: 'Ya has seleccionado la Suma más de una vez seguida, podrias seleccionar otras operaciones como:',
            text: 'Multiplicación, Divición o Resta :)',
            icon: 'error'
        });
    }
}


function rest(){
    if (op_0 && op_1) {
        opi_2 = '';
        operacion.textContent = operar(resultado_a, op_0, op_1, opi, opi_2);  
        opi = opi_2;
        opi_2 = '';
        op_1 = operacion.textContent; 
        op_0 = '';
        operacion_tpm = '';
        rest();   
    } else if (!operacion.textContent.includes('-')) {
        opi = ' - ';
        opi_2 = ' - ';
        if (operacion.textContent.includes ('*') || operacion.textContent.includes ('/') || operacion.textContent.includes ('+')) {
            operacion.textContent = operacion.textContent.slice(0,-3);
        }
        operacion.textContent = operacion.textContent + opi;
        op_0 = operacion.textContent;
        op_1 = '';
    } else {
        swal({
            title: 'Ya has seleccionado la Resta más de una vez seguida, podrias seleccionar otras operaciones como:',
            text: 'Multiplicación, Divición o Suma :)',
            icon: 'error'
        });
    }
}


function res (){
    resultado_a = 1;
    if (!operacion.textContent.includes('*') && !operacion.textContent.includes('/') && !operacion.textContent.includes('+') && !operacion.textContent.includes('-')) {
        def = op_1;
    }
    if (operacion.textContent.includes('*') || operacion.textContent.includes('/') || operacion.textContent.includes('+') || operacion.textContent.includes('-')){
        def = operar(resultado_a, op_0, op_1, opi, opi_2);
    }
    resultado.textContent = ' = ' + def
    operacion_tpm = '';
    op_0 = '';
    op_1 = '';
}

function salir() {
    location.href = "https://www.google.com/?hl=es&safe=active&ssui=on"
}



init();