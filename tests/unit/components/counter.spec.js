import { shallowMount } from  '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    
    test('Debe hacer Match con el Snapshot', ()=> {

        // Con esto podemos saber si tiene botones, podemos disparar trigger de los botones
        const wrapper = shallowMount(Counter)

        // para el snapshot se usa una funcion , 
        expect(wrapper.html()).toMatchSnapshot();
    })
})
