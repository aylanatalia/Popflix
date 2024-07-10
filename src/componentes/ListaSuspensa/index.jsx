import { useState } from "react"
import styled from "styled-components"

const SelecaoFormEstilos = styled.fieldset`
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

const CaixaSelecaoEstilos = styled.select`
    width: 100%;
    height: 62px;
    font-size: 20px;
    background-color: transparent;
    font-weight: 600;
    color: black;
    border: 4px solid black;
    border-radius: 15px;
    padding-left: 10px;
    outline: none;
`

const ListaSuspensa = ({ id, categorias, value, handleChange }) => {
    const [valido, setValido] = useState(true);

    return (
        <SelecaoFormEstilos>
            <LabelEstilos className={valido ? "" : "invalido"} htmlFor={id}>
                Categorias:
            </LabelEstilos>
            <CaixaSelecaoEstilos
                className={valido ? "" : "invalido"}
                id={id}
                value={value}
                required
                onChange={(evento) => handleChange(evento.target.value)}
            >
                <option value='' hidden>Escolha a categoria</option>
                {categorias.map((categoria)=> <option key={categoria.nome}>{categoria.nome}</option> )}
            </CaixaSelecaoEstilos>
        </SelecaoFormEstilos>
    )
}

export default ListaSuspensa