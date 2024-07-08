import styled from "styled-components";



const TituloEstilizado = styled.h1`
    font-size: 32px;
    color: #7f0000;
`

function Titulo(){
    return(
        <TituloEstilizado>POPFLIX</TituloEstilizado>
    )
}

export default Titulo

