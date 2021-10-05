import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ( { categoria } ) => {

    const {data, loading} = useFetchGifs( categoria);

    console.log(data, loading)

    return (
        <>
            <h3> { categoria } </h3>

            

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
