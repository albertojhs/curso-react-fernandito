import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../CounterApp';

describe('Pruebas para CounterApp', () => { 

    test('Debe de coincidir con el snapshoot', () => { 
        const { container } = render( <CounterApp value={ 100 }/> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {
        render( <CounterApp value={100} /> );
        expect( screen.getByRole('heading', {level: 3}).innerHTML.trim() ).toEqual( '100' );
        
        //Versión de Fernandito
        //Con esta versión hay que tener mucho cuidado ya que debemos estar seguros que solo existe un 
        //100 en toda la página
        expect( screen.getByText( '100' ) ).toBeTruthy();
    });


    test('Debe de incrementar con el evento +1', () => {
        render( <CounterApp value={ 10 } /> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11') ).toBeTruthy();
    });


    test('Debe decrementar con el evento -1', () => {
        render( <CounterApp value={ 10 } /> );
        fireEvent.click( screen.getByText( '-1' ) );
        expect( screen.getByText( '9' ) ).toBeTruthy();
    });
    
    
    test('Debe regresar al valor inicial con el evento reset', () => {
        render( <CounterApp value={ 10 } /> );
        fireEvent.click( screen.getByText( '-1' ) );
        fireEvent.click( screen.getByText( 'reset' ) );
        expect( screen.getByText( '10' ) ).toBeTruthy();
        
        //Manera 2, usando aria-label en el DOM para llamarlo por el name, OJO usar la propiedad
        //name directamente no funciona, debe ser aria-label
        fireEvent.click( screen.getByText( '+1' ) );
        fireEvent.click( screen.getByRole( 'button', {name: 'btn-reset'} ) );
        expect( screen.getByText( '10' ) ).toBeTruthy();
        
        
    });

 })