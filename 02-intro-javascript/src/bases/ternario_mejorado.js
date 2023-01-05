const activo = true;

const mensaje_uno = ( activo ) ? 'Está activo' : 'No está activo';

//Si solo se quiere una sola condición sin preocuparnos de la otra
const mensaje_dos = activo && 'Está activo';
const mensaje_tres = !activo && 'No está activo';