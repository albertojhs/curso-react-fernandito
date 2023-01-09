import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {
    
    // test('debe coincidir con la fotografía del componente', () => { 
    //     const title = 'Mi título';
    //     const subtitle = 'Mi subtítulo';
    //     const { container } = render( <FirstApp title={title} subtitle={subtitle}/> );
    //     expect( container ).toMatchSnapshot();
    // });
    
    test('debe mostrar el título en un h1', () => { 
        const title    = 'Mi título';
        const subtitle = 'Mi subtítulo';
        const testId   = 'test-title';

        const { container, getByText, getByTestId } = render( <FirstApp title={title} subtitle={subtitle}/> );
        expect( getByTestId(testId).innerHTML ).toBe( title );

        //forma no recomendada, usando solo js
        //const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe( title );
        //expect( h1.innerHTML ).toContain( title );
      });


      test('debe de mostrar el subtitulo de props', () => { 
        const title         = 'titulo';
        const subtitle      = 'subtitulo';
        const { getByText } = render(
            <FirstApp title={title} subtitle={subtitle} />
        );
        expect( getByText( subtitle ) ).toBeTruthy();
       })

});