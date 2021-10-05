import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ( { categoria } ) => {

    const {data} = useFetchGifs( categoria);

    

    return (
        <>
            <h3 className="animate__animated animate__bounceInLeft"> { categoria } </h3>

            

            <div className="card-grid">


                    {
                        data.map( img => (
                            <GifGridItem
                                key={ img.id }
                                {...img}
                            />
                        ))
                    }

            </div>
        </>
    )
}

export default GifGrid
