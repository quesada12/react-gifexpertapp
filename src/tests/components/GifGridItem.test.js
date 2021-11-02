import { shallow } from "enzyme"
import {GifGridItem} from '../../components/GifGridItem'


describe('Pruebas en el Componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)
    
    test('Debe mostrarse el componente de la forma correcta', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de tener un <p> con el Title', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(title);
    })

    test('Debe de tener una <img /> igual al url y al alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('Debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain('animate__fadeIn');
    })
    
    

})
