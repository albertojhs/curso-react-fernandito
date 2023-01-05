// const getImagenPromesa = () => new Promise((resolve, reject) => { resolve('https://bajldbakjfjafjaf') });
// getImagenPromesa().then( console.log );


const getImagen = async () => {
    try{
        const API_KEY = 'WpZdQtTXZi6PHYVE0BU3B5NjVWRKseSg';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const {url} = (await respuesta.json()).data.images.original;
        const img = document.createElement('img');
        img.src = url; 
        document.body.appendChild(img);
    } catch( error ){
        
    }

    
}

getImagen()
//setTimeout(()=>{window.location.reload()}, 4000);


