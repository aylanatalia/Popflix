import styled from "styled-components"
import editarIcone from './editaricone.png'
import deletarIcone from './excluir-icone.png'
import { useVideosContext } from '../../Contexto/VideosContext'
import { Link } from "react-router-dom"


const Cartao = styled.div`
    width: 27rem;
    height: 27rem;
    display: flex;
    flex-direction: column;
`

const Imagem = styled.div`
    width: 100%;
    min-height: 19.9rem;
    border:  4px solid ${(props) => props.$color};
    border-radius: 4px;
    box-shadow: 0px 0px 17px 8px ${(props) => props.$color};
`

const DivBotaoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 70px;
    align-items: center;
    height: 3.68rem;
    border:  4px solid ${(props) => props.$color};
    border-top: none;
    border-radius: 4px;
`

const BotaoDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
`

const Card = ({id, color, video, capa, titulo}) => {
    const videosContext = useVideosContext();
    return(
        <Cartao>
            <Link to={`/${id}`}>
                <Imagem>
                    <img src={capa} alt={titulo}/>
                </Imagem>
            </Link>
            <DivBotaoContainer $color={color}>
                <BotaoDiv>
                    <img src={deletarIcone} alt="deletar"/>
                    DELETAR
                </BotaoDiv>
                <BotaoDiv>
                    <img src={editarIcone} alt="editar"/>
                    EDITAR
                </BotaoDiv>
            </DivBotaoContainer>
        </Cartao>
    )
}

export default Card