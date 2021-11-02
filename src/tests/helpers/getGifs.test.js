import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {
    
    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(10)
    })

    test('Debe de tener una categoría', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
    })
    
})
