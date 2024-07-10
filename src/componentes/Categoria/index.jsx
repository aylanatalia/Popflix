import  styled from "styled-components";
import TituloCategoria from "../TituloCategoria";
import Card from "../Card";

const CategoriaContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    flex-grow: 1;
`


const Categoria = ({categorias,videos})=>{
    const temVideos = videos.length > 0;

    return(
        temVideos && <>
            <TituloCategoria color={categorias.color}>
                {categorias.nome}
            </TituloCategoria>
            <CategoriaContainer>
                {videos.map((video)=> <Card key={video.id} color={categorias.color} video={video} />)}
            </CategoriaContainer>
        </>
    )
}

export default Categoria