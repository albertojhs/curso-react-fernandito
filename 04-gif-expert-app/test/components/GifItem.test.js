import { render, screen } from '@testing-library/react';

import { GifItem } from "../../src/components";

describe('Pruebas de GifItem', () => { 

    const titulo = 'Texto alternativo para el gif';
    const url = 'https://www.pagina-de-gifs.com/';
    
    test('GifItem debe de validar el snapshot', () => {
        const { container } = render( <GifItem title={ titulo } url={ url }/> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imágen con el url y el alt indicado', () => {
        render( <GifItem title={ titulo } url={ url }/> );
        // screen.debug();
        
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( titulo );
        
        const { src, alt } = screen.getByRole('img');
        expect( [ src, alt ] ).toStrictEqual( [ url, alt ] );
    });
    
    test('Debe de mostrar el título  en el componente', () => {
        render( <GifItem title={ titulo } url={ url }/> );
        expect( screen.getByText( titulo ) ).toBeTruthy();
    });
 })