import React, { useState, useEffect }from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ( { categoria } ) => {

    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs();
        
    }, [])

    
    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=CbNmCQsVkFWFOOL8ohccLdX1mXSz69hv'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( imag => {
            return {
                id: imag.id,
                title: imag.title,
                url: imag.images.downsized_medium.url
            }
        } )


        
        setimages(gifs);


    }

    


    return (
        <div>
            <h3> { categoria } </h3>
        
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            {...img}
                        />
                    ))
                }
            
        </div>
    )
}

export default GifGrid
