import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en el componente GifExpertApp', () => {
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe mostrar una lista de categorias', () => {
        
        const categories = ['Naruto','Shikamaru'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
