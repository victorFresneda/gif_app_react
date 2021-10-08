import React,{ Fragment, useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';



export function GifExpertApp() {

    const [categories, setCategories] = useState(['']);

    

    return (

        <Fragment>
            <h2>Gif App</h2>
            <AddCategory  setCategories={ setCategories }/>
            <hr />



            <ol>
            
                {
                    categories.map( categoria => (

                        <GifGrid 
                            categoria={ categoria }
                            key={ categoria }
                        />
                    ))  
                }
                
            </ol>
        </ Fragment>
    );
}


export default GifExpertApp;