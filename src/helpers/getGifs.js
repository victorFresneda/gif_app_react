



export const getGifs = async( categoria ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ categoria }&limit=10&api_key=CbNmCQsVkFWFOOL8ohccLdX1mXSz69hv`
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( imgs => {
        return {
            id: imgs.id,
            title: imgs.title,
            url: imgs.images.downsized_medium.url
        }
    } )



    return gifs;


}