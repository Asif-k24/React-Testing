/*
    * Greet should render the text hello and if a name is passed into the component
    * It should render hello followed by the name
*/

import { render, screen } from '@testing-library/react'
import Greet from '../components/greet/Greet'

describe("Greet", () => {

    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('hello')
        expect(textElement).toBeInTheDocument()
    })

})

describe('Not nested', () => {

    test('renders a name', () => {
        render(<Greet name='asif' />)
        const textElement = screen.getByText("hello asif")
        expect(textElement).toBeInTheDocument()
    })
})