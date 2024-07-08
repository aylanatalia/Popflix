import styled from "styled-components";

const BotaoEstilizado = styled.button`
    width: 180px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        background-color: black;
        border: 2px solid #5b1134;
        box-shadow: 0 0 12px 4px #5b1134 inset;
    }
`

const Botao = ({children}) => {
    return(
        <BotaoEstilizado>
            {children}
        </BotaoEstilizado>
    )
}

export default Botao 