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