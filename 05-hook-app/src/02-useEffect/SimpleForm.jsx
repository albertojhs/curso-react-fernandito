import { useState, useEffect } from "react"

import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
            username: 'strider',
            email: 'alberto@google.com'
        });
    
    const { username, email } = formState;

    const onInputChange = ( {target} ) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ] : value //Es para modificar el name donde quier que eaté en el obj
        })
    }

    //Cuando las dependencias [] se dejan vacías se va a ejecutar el callback solo una vez al
    //inicio de la ejecución del componente
    useEffect(() => {
        // console.log('El useEffect se llamó');
    }, []);

    //En este caso Se va a ejecutar el callback cada que cambie el formulario
    useEffect(() => {
        // console.log('Se llamó al useEffect por cambio en el formlario');
    }, [formState]);
    
    
    //En este caso Se va a ejecutar el callback cada que cambie el email
    useEffect(() => {
        // console.log('Se llamó el useEffect por cabio en el input de email');
    }, [email]);
    

    return (
      <>
          <h1>Formulario Simple</h1>
          <hr />
          <input 
              type="text" 
              className="form-control"
              placeholder="Nombre de usuario"
              name="username" 
              value={ username }
              onChange={ onInputChange }
          />
          <input 
              type="email" 
              className="form-control mt-2"
              placeholder="usuario@dominio.com"
              name="email" 
              value={ email }
              onChange={ onInputChange }
          />

        { username === 'strider2' &&  <Message /> }

      </>
    )
}
