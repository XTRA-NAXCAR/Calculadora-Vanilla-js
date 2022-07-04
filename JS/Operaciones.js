import {operar} from './Operar.js';

/**
 * 
 * @param {String} operacionTextContent Operacion del Display de la calculadora
 * @param {String} op_0 Primer numero del Display de la calculadora
 * @param {String} op_1 Segundo numero del Display de la calculadora
 * @param {String} operacion_tpm Operación temporal que guaradara el primer numero y el signo de la operación en el Display de la calculadora
 * @param {String} opi Signo de la operacion
 * @param {String} opi_2 Segundo signo para una siguiente operación
 * @param {String} resultado_a Valor de ayuda para el evento del botón '='
 * @param {String} signo Signo de la operación
 * @returns {Arrangement} Retornando nuevos valores para operacionTextContent, op_0, op_1, operacion_tpm, opi, opi_2
 */
export function signos(operacionTextContent, op_0, op_1, operacion_tpm, opi, opi_2, resultado_a, signo){
    if (op_0 && op_1) {
        operacionTextContent = String(operar(resultado_a, op_0, op_1, opi, opi_2));  
        op_1 = operacionTextContent; 
        op_0 = '';
        operacion_tpm = '';
        opi = opi_2;
        opi_2 = '';
        ( {  
            operacionTextContent, 
            op_0, 
            op_1, 
            operacion_tpm, 
            opi, 
            opi_2, 
            resultado_a 
          } =
            signos(
                operacionTextContent, 
                op_0, 
                op_1, 
                operacion_tpm, 
                opi, 
                opi_2, 
                resultado_a,
                signo,
                )
        );
    } else if (!operacionTextContent.includes(signo)) {
        opi = ' ' + signo + ' '; 
        opi_2 = ' ' + signo + ' '; 

        let signos = ['*', '/', '+', '-'];
        let validarSignos = signos.filter((item) => item !== signo);

        validarSignos.forEach(signo => {
            if (operacionTextContent.includes (signo)) {
                operacionTextContent = operacionTextContent.slice(0,-3);
            }
        });

        operacionTextContent = operacionTextContent + opi;
        op_0 = operacionTextContent;
        op_1 = '';
    } else {
        swal({
            title: 'Ya has seleccionado la Multiplicación más de una vez seguida, podrias seleccionar otras operaciones como:',
            text: 'Divición, Suma o Resta :)',
            icon: 'error'
        });
    }
    return { operacionTextContent: operacionTextContent, 
        op_0: op_0, 
        op_1: op_1, 
        operacion_tpm: operacion_tpm, 
        opi: opi, 
        opi_2: opi_2, };
}

/**
 * 
 * @param {String} resultado_a Valor de ayuda para el evento del botón '='
 * @param {String} operacionTextContent Operacion del Display de la calculadora
 * @param {String} op_0 Primer numero del Display de la calculadora
 * @param {String} op_1 Segundo numero del Display de la calculadora
 * @param {String} def Variable que representa el resultado de la operación
 * @param {String} operacion_tpm Operación temporal que guaradara el primer numero y el signo de la operación en el Display de la calculadora
 * @param {String} resultadoDisplayTextContent Resultado del Display de la calculadora
 * @param {String} opi Signo de la operacion
 * @param {String} opi_2 Segundo signo para una siguiente operación
 * @returns 
 */
export function resultado(resultado_a, operacionTextContent, op_0, op_1, def, operacion_tpm, resultadoDisplayTextContent, opi, opi_2) {
    resultado_a = 1;
    if (!operacionTextContent.includes('*') && 
        !operacionTextContent.includes('/') && 
        !operacionTextContent.includes('+') && 
        !operacionTextContent.includes('-')) {
        def = op_1;
    }
    if (operacionTextContent.includes('*') || 
        operacionTextContent.includes('/') || 
        operacionTextContent.includes('+') || 
        operacionTextContent.includes('-')){
        def = operar(resultado_a, op_0, op_1, opi, opi_2);
    }
    resultadoDisplayTextContent = ' = ' + def
    operacion_tpm = '';
    op_0 = '';
    op_1 = '';

    return { 
        resultado_a: resultado_a,
        def: def, 
        operacion_tpm: operacion_tpm, 
        op_0: op_0, 
        op_1: op_1, 
        resultadoDisplayTextContent: resultadoDisplayTextContent,
    };
}