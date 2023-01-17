import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    //Uso del hook personalizado useForm
    //En este caso podemos desestructurar las variables username, email y password del 
    //estado ya que en el retorno del hook estamos retornando el estado y el estado con
    //el operador spread
    const {username, email, password, onResetForm, onInputChange} = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
      <>
          <h1>Formulario con custom hook</h1>
          <hr />
          <input 
              type="text" 
              className="form-control"
              placeholder="Nombre de usuario"
              name="username" 
              autoComplete="off"
              value={ username }
              onChange={ onInputChange }
              />
          <input 
              type="email" 
              className="form-control mt-2"
              placeholder="ejemplo@dominio.com"
              name="email" 
              autoComplete="off"
              value={ email }
              onChange={ onInputChange }
          />
          <input 
              type="password" 
              className="form-control mt-2"
              placeholder="Contraseña"
              name="password" 
              value={ password }
              onChange={ onInputChange }
          />

        <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar campos</button>
      </>
    )
}
