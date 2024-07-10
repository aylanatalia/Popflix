import styled from "styled-components";

const SecaoNaoEncontrada = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 500px;
    margin-top: 20px;
`

const DivConteudo = styled.div`
    flex: 1;
    font-family: "Roboto", sans-serif;
    text-align: center;
    >h2{
        font-size: 32px;
        font-weight: 900;
        margin-bottom: 20px;
    }
    >p{
        font-size: 20px;
        line-height: 25px;
    }
`

const NaoEncontrada = ()=>{
    return(
        <SecaoNaoEncontrada>
            <DivConteudo>
                <h2>Ops</h2>
                <p>A página que você procura não foi encontrada</p>
            </DivConteudo>
        </SecaoNaoEncontrada>
    )
}

export default NaoEncontrada