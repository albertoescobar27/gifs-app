import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react'; 
import {CustomHeader} from './CustomHeader'


describe('CustomHeader', ()=>{

    const title = 'Test Title'

    test('should render the title correctly', ()=>{

        //Dibuja el componente en el navegador virtual (invisible)
        render(<CustomHeader title={title}/>)
        
        //toma el html actual en momoria (en el navegador virtual) y lo imprime como texto en la terminal
        // screen.debug()


        //screen.getByText(title) - busca y devuelve el texto que coincida con title
        // nos aseguramos de que el texto del titulo este definido (exista)
        //expect( ... ).toBeDefined(); Significa literalmente: "Espero que lo que esté aquí adentro esté definido (es decir, que exista y no sea undefined)".
        expect(screen.getByText(title)).toBeDefined();
    })

    test('should render the description when provided', ()=>{
        const description = 'Test description'
        render(<CustomHeader title={title} description={description}/>)  
        
        // queremos comprobar que el texto de la descripcion exista
        expect(screen.getByText(description)).toBeDefined(); 

        // 1. Buscamos el elemento por su rol de HTML (paragraph = <p>)
        expect(screen.getByRole('paragraph')).toBeDefined(); 

        // 2. Evaluamos que su contenido interno sea idéntico a la descripción
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    })

    test('should not render description when not provided', ()=>{
        
        // 1. Renderizamos SOLO con el título (sin descripción)
        const {container} = render(<CustomHeader title={title}/>)  
        // screen.debug();

        // 2. Buscamos el contenedor por su clase CSS usando querySelector
        const divElement = container.querySelector('.content-center');

        //obtenemos el elemto h1 si lo hay
        const h1 = divElement?.querySelector('h1');

        
        expect(h1?.innerHTML).toBe(title)

        // 3. Buscamos un párrafo <p> dentro de ese div
        const p = divElement?.querySelector('p');

        // 4. Aseguramos que el resultado sea nulo (es decir, el párrafo no se creó)
        expect(p).toBeNull();

    })

})
