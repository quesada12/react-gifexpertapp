import { useFetchGifs } from "../../hooks/useFetchGifs"
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el Hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {

       const {result,waitForNextUpdate} = renderHook( ()=> useFetchGifs('Naruto'));
       const {data,loading} = result.current;
       await waitForNextUpdate();
       
       expect(data).toEqual([]);
       expect(loading).toBe(true);
       
    });
    
    test('Debe de retornar un [] de imagenes y loading en false', async() => {
        
        const {result,waitForNextUpdate} = renderHook( ()=> useFetchGifs('Naruto'));
        await waitForNextUpdate();
        const {data,loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
