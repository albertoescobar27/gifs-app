import {describe, expect, test} from 'vitest'
import {render} from '@testing-library/react'
import { GifsApp } from './GifsApp'

describe('GifsApp', () => {
    test('Should render component properly', () => {
        // 1. Renderizamos el componente en el navegador virtual y extraemos su contenedor HTML
        const {container} = render(<GifsApp />)

        // 2. Evaluamos que el HTML actual coincida exactamente con la foto guardada (Snapshot)
        expect(container).toMatchSnapshot();

    })
})
