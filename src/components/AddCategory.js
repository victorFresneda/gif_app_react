import React, { useState } from 'react'
import PropTypes  from 'prop-types'        

const AddCategory = ({setCategories}) => {

    const [inptValue, setinptValue] = useState('');

    const handleInputChange = (e) => {
        setinptValue(e.target.value);
        console.log('llamado necesario')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inptValue.trim().length > 2) {
            setCategories( cats => [inptValue, ...cats,]);
            setinptValue('');
        }
        
        
    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input 
                placeholder="Que buscas?"
                type="text"
                value={ inptValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.prototypes = { 
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
