
import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
    console.log('Me volví a ejecutar :(');
  return (
    <button
        className="btn btn-warning"
        onClick={() => {
            increment( 1 );
        }}>
        Incrementar
    </button>
  )
})
