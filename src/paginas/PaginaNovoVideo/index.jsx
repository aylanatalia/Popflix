import styled from "styled-components";
import { useVideosContext } from "../../Contexto/VideosContext"
import Formulario from "../../componentes/Formulario";


const DivNovoVideo = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 90px auto 120px;
    padding: 0 10px;
    position: sticky;
`

const TituloEstilos = styled.h1`
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    font-weight: 900;
    color: white;
    margin-bottom: 20px;
`

const ParagrafoEstilos  = styled.p`
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 40px;
`

const DivFormulario = styled.div`
    padding: 0 50px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PaginaNovoVideo = ()=>{
    const videoContext = useVideosContext();

    return(
        <DivNovoVideo>
            <TituloEstilos>NOVO VÍDEO:</TituloEstilos>
            <ParagrafoEstilos>Preencha o formulario para criar um novo card de vídeo.</ParagrafoEstilos>
            <DivFormulario>
                <Formulario/>
            </DivFormulario>
        </DivNovoVideo>
    )
}

export default PaginaNovoVideo