import { FunctionComponent } from 'react'
import { ButtonProps } from '../types/types'

const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button