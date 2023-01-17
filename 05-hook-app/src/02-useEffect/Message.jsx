import { useState } from "react";
import { useEffect } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});

    // useEffect(() => {
    //   console.log('Message montado');
    //   return () => {
    //     console.log('Message desmontado')
    //   }
    // }, [])


    // Si dejamos el useEffect así como está a pesar de que el componente se desmonte va a seguir
    //ejecutando el callback, y por cada vez que el componente se monta de nuevo se genera un 
    //nuevo listener, de modo que puede llegar a lanzar miles de ejecuciones del callback por segundo
    // useEffect(() => {
    //     window.addEventListener('mousemove', ( event ) => {
    //         console.log( event.x, event.y );
    //     })
    //   return () => {
        
    //   }
    // }, []);


    //Esta sería la solución al problema
    useEffect(() => {
        const onMouseMove = ( {x, y} ) => {
            setCoords( { x, y } );
        }
        window.addEventListener('mousemove', onMouseMove );
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove );
      }
    }, []);
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}
