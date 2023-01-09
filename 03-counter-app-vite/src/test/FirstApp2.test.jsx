import { render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {
  const title = 'Hola soy Alberto';
  const subtitle = 'José José';
    
    test('debe coincidir con la fotografía del componente', () => { 
        const { container } = render( <FirstApp title={title} subtitle={subtitle}/> );
        expect( container ).toMatchSnapshot();
    });
    
    test('debe mostrar el mensaje "Hola soy Alberto"', () => { 
        render(<FirstApp title={title} subtitle={subtitle}/>);
        //Con esta instrucción de abajo podemos ver el objeto screen
        //screen.debug();
        expect( screen.getByText( title ) ).toBeTruthy();
      });
      
      test('debe de mostrar el títlo en un h1', () => { 
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );  
      });
      
      test('debe de mostrar el subtítulo enviado por props', () => { 
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect( screen.getAllByText( subtitle ).length ).toBe( 1 );
       });
});