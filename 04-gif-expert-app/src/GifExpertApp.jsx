import { useState } from 'react';
import { AddCategory, GifGrid } from "./components"; //Por defecto busca el index de la carpeta que es mi archivo de barril


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'UFO' ]);

  const onAddCategory = ( newCategory ) => {
    setCategories( [ newCategory, ...categories.filter( cat => cat.toLowerCase() !== newCategory.toLowerCase()) ] );
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onAddCategory={ onAddCategory } />
        { categories.map( category => ( 
            <GifGrid 
              key={ category } 
              category={ category }/>
          ))
        }
    </>
  )
}
