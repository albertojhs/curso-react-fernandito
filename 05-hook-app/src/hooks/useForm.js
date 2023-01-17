import { useState } from 'react';

//En este caso se trata de hacer que el objeto inicial teng auna forma genérica, para ello se 
//recibe como argumento del hook un objeto que tendrá la forma que deseamos, se inicializa
//el estado con ese objeto y se exporta el estado y la función para cambiar el estado onInputChange
//esta función es igualmente genérica, se basa en el name ubicado en el target del input que
//estemos modificando
export const useForm = ( initialForm ) => {
    const [formState, setformState] = useState( initialForm );
    const onInputChange = ( {target} ) => {
        const { name, value } = target;
        setformState({ ...formState, [ name ] : value });
    }
    const onResetForm = () => {
        setformState( initialForm );
    }
    //Se desestructura el formState para que en el componente se puedan desestructurar igualmente
    //como retorno del hook, además se retorna el estado sin desestructurar por si acaso :P
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}