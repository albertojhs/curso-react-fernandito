import {retornaArreglo} from '../../base-pruebas/07-deses-arr';

describe('Pruebas de 07-deses-arr', () => { 
    
    test('retornaArreglo debe retornar un string y un número', () => { 
        const [ cadena, numero ] = retornaArreglo();

        expect( cadena ).toBe('ABC');
        expect( numero ).toBe(123);

        expect( typeof cadena ).toBe('string'); 
        expect( typeof numero ).toBe('number'); 

        expect( cadena ).toEqual( expect.any(String) );
     });

 })