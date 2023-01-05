import { useState } from 'react';
import PropTypes from "prop-types";


export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value );
    
    const handleAdd = () => { 
        setCounter( counter + 1 ); 
    }
    

    return (
        <>
            <h2>CounterApp</h2>
            <h3> { counter } </h3>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    );
} 


CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}