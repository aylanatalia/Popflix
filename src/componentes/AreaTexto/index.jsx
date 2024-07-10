import { useState } from "react"
import styled from "styled-components"

const AreaTextoFormEstilos = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
    width: 90%;
    background-color: transparent;
`

const LabelEstilos = styled.label`
    font-size: 20px;
    font-weight: 600;
    color: white;
    &.invalido{
        color: red;
    }
`
const AreaTextoEstilos = styled.textarea`
    width: 100%;
    height: 112px;
    font-size: 20px;
    background-color: transparent;
    font-weight: 600;
    color: white;
    border:  4px solid black;
    border-radius: 15px;
    padding-left: 10px;
    outline: none;
    &.invalido{
        border: 4px solid red;
    }
`

const AreaTexto = ({ label, id, value, placeholder, handleChange }) => {
    const [valido, setValido] = useState(true);

    return (
        <AreaTextoFormEstilos>
            <LabelEstilos className={valido ? "" : "invalido"} htmlFor={id} >
                {label}
            </LabelEstilos>
            <AreaTextoEstilos
                className={valido ? "" : "invalido"}
                id={id}
                placeholder={placeholder}
                value={value}
                required
                onChange={(evento) => handleChange(evento.target.value)}
                onBlur={(evento) => setValido(evento.target.validity.valid)}
            />
        </AreaTextoFormEstilos>
    )
}

export default AreaTexto