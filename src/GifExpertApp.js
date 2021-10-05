import React,{ useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';



function GifExpertApp() {

    const [categories, setCategories] = useState(['']);

    

    return (

        <>
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
        </>
    );
}


export default GifExpertApp;