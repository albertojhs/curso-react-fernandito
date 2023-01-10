import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

 describe('Pruebas en el hook useFetchGifs', () => {
    
    test('-> Debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('Apple'));
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
    });
    
    
    test('->Debe de retornar un arreglo de imágenes y el isLoading en true', async () => {
        const { result } = renderHook( () => useFetchGifs('Apple'));
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ),
            {
                timeout: 1000 //tiempo en que se espera a que se resuelva
            }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();
    });

 });