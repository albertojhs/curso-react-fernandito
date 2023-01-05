import getHeroeById from './02-imports';



// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         heroe ? resolve(heroe) : reject('No se pudo encontrar el heroe');
//         //resolve(heroe);
//         //reject('No se pudo encontrar el heroe');
//     }, 2000);

// } );

// promesa.then( (resp)=>{
//     console.log(resp);
// } ).catch( err => {
//     console.error( err );
// });


const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
            setTimeout(() => {
                const heroe = getHeroeById(id);
                heroe ? resolve(heroe) : reject('No se pudo encontrar el heroe');
                //resolve(heroe);
                //reject('No se pudo encontrar el heroe');
            }, 2000);
        
        } );
}

getHeroeByIdAsync(1)
    .then( heroe => console.log(heroe) )
    .catch( console.warn );