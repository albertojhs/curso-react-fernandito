import { render, screen  } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas de GifExpertApp', () => {
    
    test('-> Debe de mostrar el títlo GifExpertApp ', () => {
        render( <GifExpertApp /> );
        expect( screen.getByText( 'GifExpertApp' ) ).toBeTruthy();
    });
    
    test('Debe de coincidir con el snapshot', () => {
        render( <GifExpertApp /> );
        expect( screen ).toMatchSnapshot();
    });

});