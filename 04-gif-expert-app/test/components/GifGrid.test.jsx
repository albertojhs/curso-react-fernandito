import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//El tema especial de esta prueba es hacer un mock de una función, puede ser nuestra o de terceros
//para ello debemos comenzar con la siguiente instrucción
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de GifGrid', () => {

    const category = 'DATA-CMP-BYLINE-COPY';


    test('->Debe de mostrar el Cargando... inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images    : [],
            isLoading : true
        });

        render( <GifGrid category={ category }/> );
        
        //Probando el estado inicial de la aplicación
        expect( screen.getByText( 'Cargando...' ) ).toBeTruthy();
        expect( screen.getByText( category ) ).toBeTruthy();
    });
    
    test('->Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id    : 'ABC',
                title : 'Saitama',
                url   : 'https://localhost/saitama.jpg'
            },
            {
                id    : '123',
                title : 'Pepsiman',
                url   : 'https://localhost/pepsiman.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        render( <GifGrid category={ category }/> );
        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe( 2 );
    });
});