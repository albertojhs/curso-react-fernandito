export const getImagen = async() => {
    try {
        const apiKey = 'WpZdQtTXZi6PHYVE0BU3B5NjVWRKseSg';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;

    } catch (error) {
        return 'Ningún gif encontrado';
    }
}


