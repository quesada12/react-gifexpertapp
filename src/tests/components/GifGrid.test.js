import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en el Componente GifGrid', () => {

    const category = 'Naruto';
    
    test('Debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar items cuando se cargan imagenes, useFetchGifs', () => {
        
        const imgs = [{
            id:'ABC',
            url:'https://localhost/cualquiercosa.jpg',
            title:'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ category } />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
        
    })
    
    
})
