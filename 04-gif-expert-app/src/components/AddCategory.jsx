import { useState } from 'react';


export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {

        event.preventDefault();
        if( inputValue.trim().length < 1 ) return;
        props.onAddCategory( inputValue.trim() );
        setInputValue( '' );

        //Si usaramos setCategories en su lugar habría que pasar un callback en lugar de un string
        //Para esto tendríamos que mandar el setCategories en lugar de onAddCategory en el 
        //componente de GifExpertApp, esto no es muy recomendable ya que quien use GifExpertApp
        //debe de saber que se trata de una función de state y hace las cosas un poco difíciles de
        //usar
        // props.setCategories( categories => [ inputValue, ...categories] );
        
    }


    return (
        // <form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
              //   onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}
