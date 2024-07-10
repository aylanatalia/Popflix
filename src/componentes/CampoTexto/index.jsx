import { useState } from "react"
import styled from "styled-components"

const CampoFormEstilos = styled.fieldset`
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
const CampoEstilo = styled.input`
    width: 100%;
    height: 62px;
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

const CampoTexto = ({ label, id, type, value, placeholder, handleChange }) => {
    const [valido, setValido] = useState(true);

    return (
        <CampoFormEstilos>
            <LabelEstilos className={valido ? "" : "invalido"} htmlFor={id} >
                {label}
            </LabelEstilos>
            <CampoEstilo
                className={valido ? "" : "invalido"}
                id={id}
                placeholder={placeholder}
                type={type}
                value={value}
                required
                onChange={(evento) => handleChange(evento.target.value)}
                onBlur={(evento) => setValido(evento.target.validity.valid)}
            />
        </CampoFormEstilos>
    )
}

export default CampoTexto