const API_KEY = 'WpZdQtTXZi6PHYVE0BU3B5NjVWRKseSg';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then( resp => resp.json())
    .then( ({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url; 
        document.body.appendChild(img);
    }).catch( err => console.log( err ));


setTimeout(() => { window.location.reload()}, 2500);