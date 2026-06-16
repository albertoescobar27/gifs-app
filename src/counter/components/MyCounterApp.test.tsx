import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {
    test('Should render the component', ()=>{
        render(<MyCounterApp/>);

        screen.debug();

        //esperamos que se renderize: 'counter: 10'
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(
            'Counter: 10'
        )

        //renderizamos los botones, esperamos que exista el boton (.toBeUndefined())
        expect(screen.getByRole('button', {name: '+1'})).toBeDefined()
        expect(screen.getByRole('button', {name: '-1'})).toBeDefined()
        expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined()
    })

    //que sucede si incremetamos un componente
    test('should increment the counter', () => {
         render(<MyCounterApp/>);

         const labelH1 = screen.getByRole('heading', {level:1});
         const button = screen.getByRole('button', {name: '+1'});
         
         fireEvent.click(button) //hacemos clic en el boton +1

         expect(labelH1.innerHTML).toContain('Counter: 11');
    })

    test('should decrement the counter', () => {
         render(<MyCounterApp/>);

         const labelH1 = screen.getByRole('heading', {level:1});
         const button = screen.getByRole('button', {name: '-1'});
         
         fireEvent.click(button) //hacemos clic en el boton +1

         expect(labelH1.innerHTML).toContain('Counter: 9');
    })
})