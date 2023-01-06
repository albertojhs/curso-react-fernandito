import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas de 11-async-await', () => { 
    test('getImagen debe retornar un url de la imagen', async() => { 
        const url = await getImagen();
        console.log(url);
        expect( typeof url ).toBe('string');
        
     })
 })