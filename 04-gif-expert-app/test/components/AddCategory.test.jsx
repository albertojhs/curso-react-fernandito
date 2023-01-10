import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => { 

    /////////////////////////Zona de constantes////////////////////////////////

    const inputValue = 'Chocolate';
    

    ///////////////////////////////////////////////////////////////////////////


    /////////////////////////Zona de pruebas////////////////////////////////

    //Lo importante de esta prueba es ver cómo verificar que se esté cambiando correctamente el state de la 
    //aplicación y para ello se manda a ejecutar el evento que dispara el cambio de estado y se verifica que 
    //el valor halla cambiado, en este caso el input debe cambiar su value
    test('->Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onAddCategory={ () => {} }/> );
        // screen.debug();
        const input = screen.getByRole('textbox'); //Así se busca un input
        fireEvent.input( input, { target: { value: inputValue } } );
        // screen.debug(); //Aquí se puede ver como el input ya tiene texto en el value
        expect( input.value ).toBe( inputValue ); 
    });
    
    
    //En esta prueba se ejemplifica como probar un submit
    test('->Debe de llamar onAddCategory si el input tiene un valor', () => { 
        //Hacemos esta función para evaluar el AddCategory
        //Se trata de una fución especial de jest que es en realidad un mock
        const onAddCategory = jest.fn();

        render( <AddCategory onAddCategory={ onAddCategory }/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); //Se usó el aria-label para que pudiera encontrarlo en el DOM
        //Cambiando el valor de la caja de texto
        fireEvent.input( input, { target: { value: inputValue } } );
        //Disparar el submit del formulario
        fireEvent.submit( form );
        //Debido a que después de hacer el submit la caja de texto vuelve a tener un string vacío entonces
        //probamos que así sea
        expect( input.value ).toBe( '' );
        //Para evaluar la función de onAddCategory que es la que le estamos pasando al render hacemos lo siquiente
        //Revisa que la función se halla mandado a llamar
        expect( onAddCategory ).toHaveBeenCalled();
        //Revisa que la función se halla mandado a llamar solo una vez
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        //Revisa que la función se halla mandado a llamar con el argumento de la caja de texto
        expect( onAddCategory ).toHaveBeenCalledWith( inputValue );
      });


    test('No debe de llamar el onAddCategory si el input está vacío', () => { 
        //Hacemos esta función para evaluar el AddCategory
        //Se trata de una fución especial de jest que es en realidad un mock
        const onAddCategory = jest.fn();
        render( <AddCategory onAddCategory={ onAddCategory }/> );
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        expect( onAddCategory ).toHaveBeenCalledTimes( 0 );
    });
 })
