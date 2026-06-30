import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter"

const handleAddMock = vi.fn()
const handleSubtractMock = vi.fn()
const handleResetMock = vi.fn()

//hacemos una simulacion de todo este path
vi.mock('../hooks/useCounter', ()=> ({
    useCounter: ()=>({
        counter: 40, //simulamos el valor inicial del coponente useCounter
        handleAdd: handleAddMock, //establece las funciones por decto
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock
    })
}))

describe('MyCounterApp', ()=>{
    test('should render the component', ()=>{
        render(<MyCounterApp/>)

        screen.debug();

        
        //esperamos que se renderize: 'counter: 10'
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(
            'Counter: 40'
        )

        //renderizamos los botones, esperamos que exista el boton (.toBeUndefined())
        expect(screen.getByRole('button', {name: '+1'})).toBeDefined()
        expect(screen.getByRole('button', {name: '-1'})).toBeDefined()
        expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined()
    })

    test('should call handleAdd if button is clicked', ()=>{
        render(<MyCounterApp/>)

        const button = screen.getByRole('button', {name: '+1'})

        fireEvent.click(button);

        //estoy esperando que el handleAdd sea llamado
        expect(handleAddMock).toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleResetMock).not.toHaveBeenCalled();

    })
})