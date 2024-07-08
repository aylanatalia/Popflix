import styled from "styled-components";
import Titulo from "../Titulo";
import CabecalhoLink from "../CabecalhoLink";
import Botao from "../Botao";


const HeaderEstilizado = styled.header`
    width: 100%;
    height:  100px;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid #ff230f;
    padding: 0 20px;
    background-color: #2e0a19;
    align-items: center;
    position: relative;
`

const NavEstilizado = styled.nav`
    display: flex;
    gap: 25px;
`

function Cabecalho() {
    return (
        <HeaderEstilizado>
            <Titulo />
            <NavEstilizado>
                <Botao>
                    <CabecalhoLink url="/">
                        HOME
                    </CabecalhoLink>
                </Botao>
                <Botao>
                    <CabecalhoLink url="./novovideo">
                        NOVO VIDEO
                    </CabecalhoLink>
                </Botao>
            </NavEstilizado>
        </HeaderEstilizado>
    )
}

export default Cabecalho