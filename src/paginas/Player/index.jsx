import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useVideosContext } from "../../Contexto/VideosContext"
import NaoEncontrada from "../NaoEncontrado"

const SecaoPlayer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;
    margin: 100px auto 120ox;
    min-height: 400px;
    >iframe{
        width: 90%;
        max-width: 800px;
        min-height: 400px;
        flex-grow: 1;
    }
`

const TituloVideo = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 900;
    border-bottom: 3px solid #bc4ed8;
`

const DescricaoVideo = styled.p`
    width: 100%;
    text-align: justify;
    font-size: 20px;
    font-weight: 400;
`

const Player = () => {
    const parametros = useParams();
    const videos = useVideosContext().videos;
    const videoReproduzido = videos.find((video) => Number(video.id) === Number(parametros.id));

    if (!videoReproduzido) {
        return <NaoEncontrada />
    }

    return (
        <SecaoPlayer>
            <TituloVideo>{videoReproduzido.titulo}</TituloVideo>
            <iframe

                src={videoReproduzido.link}
                title={videoReproduzido.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <DescricaoVideo>{videoReproduzido.descricao}</DescricaoVideo>
        </SecaoPlayer>
    )
}

export default Player