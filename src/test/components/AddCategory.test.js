import React from 'react';
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"


describe('Pruebas en < AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( < AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( < AddCategory setCategories={ setCategories } />);
    })
     
    test('debe de mostrarcse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
        
    test('Debe de cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input');
        const value = 'Cambio en el input';

        input.simulate('change', {target: { value }});
    })

    test('No debe de postear la informacion con sumit ', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola mundo';
        
        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', {target: { value } });

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault() {} });

        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();

        // 4. el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value')).toBe(''); 

    })
    
    
    
    
})

