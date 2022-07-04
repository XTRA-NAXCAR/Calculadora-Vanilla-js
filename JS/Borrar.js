/**
 * 
 * @param {String} op_0 Primer valor de la operación
 * @param {String} op_1 Segundo valor de la operación
 * @param {String} opi Signo de la Operación
 * @param {String} operacionTextContent Operación mostrada en el Display de la calculadora
 * @returns {Arrangement} Retorna nuevos valores para 'operacionTextContent'y 'op_1'
 *                          
 */
export function borrar(op_0, op_1, opi, operacionTextContent)
{
    if (op_0 && !opi && !op_1) {
        op_0 = op_0.slice(0,-1);
        operacionTextContent = operacionTextContent.slice(0,-1);
    }
    if (op_0 && opi && !op_1) {
        opi = opi.slice(0,-3);
        operacionTextContent = operacionTextContent.slice(0,-3);
    }
    if (op_0 && opi && op_1) {
        op_1 = op_1.slice(0,-1);
        operacionTextContent = operacionTextContent.slice(0,-1);
    }
    if (op_1 && !opi && !op_0) {
        op_1 = op_1.slice(0,-1);
        operacionTextContent = operacionTextContent.slice(0,-1);
    }
    return {operacionTextContent: operacionTextContent, op_1: op_1}
}
