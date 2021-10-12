import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs Fecht', () => {
    
    test('Debe de traer 10 elmentos', async() => {

        const gifs = await getGifs('goku');
        expect ( gifs.length ).toBe( 10 );
        
    })


    test('No debe tener elementos', async() => {

        const gifs = await getGifs('');
        expect ( gifs.length ).toBe( 0 );
        
    })
    
})
