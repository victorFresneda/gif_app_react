import React from 'react'

const GifGridItem = ({title, url}) => {

    

    return (
        <div id="mostrar-gifs">
            <img src={ url } alt={ title }/>
            <p> { title } </p>
        </div>
    )
}

export default GifGridItem
