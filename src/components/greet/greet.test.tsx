/*
    * Greet should render the text hello and if a name is passed into the component
    * It should render hello followed by the name
*/

import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe("Greet", () => {
    
    test('Greet renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('hello')
        expect(textElement).toBeInTheDocument()
    })

    test('Greet renders a name', () => {
        render(<Greet name='asif' />)
        const textElement = screen.getByText("hello asif")
        expect(textElement).toBeInTheDocument()
    })

})