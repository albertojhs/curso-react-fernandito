import { getSaludo } from './../../base-pruebas/02-template-string';

describe('Pruebas en el archivo 02-htemplate-string', () =>{
    test('getSaludo debe retornar "Hola Alberto"', () => { 
        const name = 'Alberto';
        const message = getSaludo(name);
        expect( message ).toBe('Hola Alberto');
     })
});