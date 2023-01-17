import { useCounter, useFetch } from "../hooks";
import { LoadingCharacter, Character } from '../03-examples';


export const Layout = () => {
    const { counter, incrementar } = useCounter( 1 );
    const { data, isLoading, hasError, state } = useFetch( `https://rickandmortyapi.com/api/character/${ counter }` );


    return (
      <>
        <h1>Rick & Morty charcters</h1>
        <hr />
        {
            isLoading ? 
                <LoadingCharacter /> : 
                <Character 
                    characterName={ data ? data.name : 'Sin nombre' } 
                    location={ data? data.location.name : 'Sin ubicación'}/>
        }
        <button 
            className="btn btn-primary"
            onClick={ () => { incrementar() } }
            disabled={ isLoading }>
            Siguiente personaje
        </button>
      </>
    )
}
