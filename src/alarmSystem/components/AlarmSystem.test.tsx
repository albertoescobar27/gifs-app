import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { AlarmSystem } from "./AlarmSystem";


describe('AlarmSystem', ()=>{
    test('Should render initial state as turned off', ()=>{
        
        render(<AlarmSystem/>)
        screen.debug()

        const labelH1 = screen.getByRole('heading', {level:1}) //obtenemos el  primer h1

        //verificar que al renderiar el componente por primera vez coontenga el estado 'Estado de Alarma: Apagada ✅'
        expect(labelH1.innerHTML).toContain('Estado de Alarma: Apagada ✅')

        //verificar que los botones de encender y apagar esten definidos en la pantalla
        const btnEncender = screen.getByRole('button', {name:'ENCENDER'})
        const btnApagar = screen.getByRole('button', {name:'APAGAR'})

        //esperamos que los botones se encuentren definidos
        expect(btnEncender).toBeDefined()
        expect(btnApagar).toBeDefined()
    })

    test('Should change text ACTIVADA when clicking the turn on button', ()=>{

        render(<AlarmSystem/>)

        //obtener el h1 y el boton encender
        const labelH1 = screen.getByRole('heading', {level:1}) //obtenemos el  primer h1
        const btnEncender = screen.getByRole('button', {name:'ENCENDER'})

        //simular un clic a el boton encender
        fireEvent.click(btnEncender);

        expect(labelH1.innerHTML).toContain('ACTIVADA 🚨');

    })
})