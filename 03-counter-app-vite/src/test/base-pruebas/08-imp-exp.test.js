import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';

describe('Pruebas de 08-imp-exp', () => { 
    test('getHeroeById debe retornar un héroe por ID', () => { 
        const id = 2;
        const hero = getHeroeById( id );
        expect( hero ).toEqual({
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        });
     });

    test('getHeroeById debe retornar undefined si no existe el héroe', () => { 
        const id = 100;
        const hero = getHeroeById( id );
        // expect( hero ).toBe( undefined );
        expect( hero ).toBeFalsy();
     });

     test('getHeroesByOwner debe retornar un arreglo de los héroes de DC', () => { 
        const owner = 'DC';
        const arrHeroes = getHeroesByOwner( owner );
        expect( arrHeroes ).toEqual( [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ] );
        expect( arrHeroes.length ).toBe( 3 );
      })

 })