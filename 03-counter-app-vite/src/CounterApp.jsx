import { useState } from 'react';
import PropTypes from "prop-types";


export const CounterApp = ({ value }) => {
    
    /* Declaración de constantes */
    const [ counter, setCounter ] = useState( value );


    

    /*Declaración de funciones */
    const handleAdd = () => { 
        setCounter( counter + 1 ); 
    }

    const handleSub = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }




    /*Return para el render */
    return (
        <>
            <h2>CounterApp</h2>
            <h3> { counter } </h3>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSub }>
                -1
            </button>
            <button aria-label="btn-reset" onClick={ handleReset }>
                reset
            </button>
        </>
    );
} 



/*Tipado, restricciones, etc del props */
CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}