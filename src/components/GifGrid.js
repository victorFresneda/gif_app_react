import React from 'react'
import PropTypes  from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ( { categoria } ) => {

    const {data} = useFetchGifs( categoria);

    

    return (
        <div>
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
        </ div>
    )
}

export default GifGrid

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
