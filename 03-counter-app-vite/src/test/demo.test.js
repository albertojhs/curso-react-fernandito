describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe de fallar', ()=>{
        // Inicialización
        const message1 = 'Hola mundo';
    
        //Estímulo
        const message2 = message1.trim();
    
        //Observar el comportamiento
        expect( message1 ).toBe( message2 );
    });
});
