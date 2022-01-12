import React from "react"
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../../components/GifGridItem";
jest.mock( '../../hooks/useFetchGifs' )

describe('Pruebas en el <GifGrid />', () => {

    const categoria = 'One punch';

    test('debe mostrarse correctamnete ', () => {

        useFetchGifs.mockReturnValue({

            data: [],
            loading: true 

        });

        
        const wrapper = shallow( <GifGrid category ={ categoria } /> );
        expect( wrapper).toMatchSnapshot();  
        
    })

    test('Debe de mostrar items cuando se carga imagenes em useFetchGifs ', () => {
        

        const gifs = [{

            id: 'ABC',
            url:'https:/localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({

            data: gifs,
            loading: false 

        });


        const wrapper = shallow( <GifGrid category ={ categoria } /> );

        expect( wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find(GifGridItem).length).toBe( gifs.length ); 
        
    })
    
    
})
