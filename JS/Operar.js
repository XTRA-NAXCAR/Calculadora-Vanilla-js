/**
 * 
 * @param {String} resultado_a Valor de ayuda para el evento del botón '='
 * @param {String} op_0 Primer numero del Display de la calculadora
 * @param {String} op_1 Segundo numero del Display de la calculadora
 * @param {String} opi Signo de la operacion
 * @param {String} opi_2 Segundo signo para una siguiente operación
 * @returns {Float} Resultado de la operación
 */
export function operar(resultado_a, op_0, op_1, opi, opi_2) {
    if (resultado_a === 1) {
        if (opi.includes('*')) {
            return parseFloat(op_0) * parseFloat(op_1);
        }
        if (opi.includes('/')) {
            return parseFloat(op_0) / parseFloat(op_1); 
        }
        if (opi.includes('+')) {
            return parseFloat(op_0) + parseFloat(op_1); 
        }
        if (opi.includes('-')) {
            return parseFloat(op_0) - parseFloat(op_1); 
        }
    }
    if (opi_2) {
        if (opi.includes('*')) {
            return parseFloat(op_0) * parseFloat(op_1);
        }
        if (opi.includes('/')) {
            return parseFloat(op_0) / parseFloat(op_1);
        }
        if (opi.includes('+')) {
            return parseFloat(op_0) + parseFloat(op_1);
        }
        if (opi.includes('-')) {
            return parseFloat(op_0) - parseFloat(op_1);
        }
        
    }    
}