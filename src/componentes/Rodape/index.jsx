import styled from "styled-components"
import Titulo from "../Titulo"

const FooterEstilizado = styled.footer`
background-color: #2e0a19;
display: flex;
justify-content: center;
border-top: 4px solid #ff230f;
`

const Rodape = () => {
    return(
        <FooterEstilizado>
            <Titulo/>
        </FooterEstilizado>
    )
}

export default Rodape