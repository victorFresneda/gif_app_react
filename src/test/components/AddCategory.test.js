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
    
    
    
})

