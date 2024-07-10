import styled from "styled-components";
import { useVideosContext } from "../../Contexto/VideosContext";
import Categoria from "../Categoria";

const GaleriaEstilos = styled.main`
display: flex;
flex-direction: column;
align-items: flex-start;
width: auto;
margin: 40px 0;
padding: 0 30px;
`

const Galeria = ()=>{
    const categorias = useVideosContext().categorias;
    const videos = useVideosContext().videos;

    if(videos.length === 0 || categorias.length === 0){
        return null;
    }

    return(
        <GaleriaEstilos>
            {categorias.map((categoria)=> <Categoria key={categoria.nome} categorias={categoria} videos={videos.filter((video)=> video.categoria === categoria.nome)}/>)}
        </GaleriaEstilos>
    )
}

export default Galeria