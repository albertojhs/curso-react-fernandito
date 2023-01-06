import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones';


describe( 'Pruebas en 05-fucniones', () => { 
    test('getUser debe de retornar un objecto', () => { 
        const testUser = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect( testUser ).toStrictEqual( user);
     });

     test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = 'Alberto';
        const obj = getUsuarioActivo( name );
        //expect( name ).toBe( obj.username );
        expect( obj ).toStrictEqual( {
            uid: 'ABC567',
            username: name
        } );
      })
 })