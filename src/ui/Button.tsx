import { FunctionComponent } from 'react'
import { ButtonProps } from '../types/types'

const Button: FunctionComponent<ButtonProps> = ({ text, onClick, disable }) => {
    return (
        <button onClick={onClick} disabled={disable} >{text}</button>
    )
}

export default Button