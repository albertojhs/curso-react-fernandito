console.log('Hola mundo'); 

const arr1 = [1,2,3,4];

const arr2 = [ ...arr1, 5];


const arr3 = arr2.map( function(numero){
    return numero*2;
});


console.log(arr1);
console.log(arr2);
console.log(arr3);