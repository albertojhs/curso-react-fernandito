import { useState } from "react";


export const useCounter = ( initialValue ) => {

    const [counter, setCounter] = useState(initialValue);

    const incrementar = ( value = 1 ) => {
        setCounter( counter + value );
    }
    
    const decrementar = ( value = 1 ) => {
        if( (counter - value) < 0 ) return;
        setCounter( counter - value );
    }

    const resetear = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        incrementar,
        decrementar,
        resetear
    };
}