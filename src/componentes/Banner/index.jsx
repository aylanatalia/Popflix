import styled from "styled-components"
import { useVideosContext } from "../../Contexto/VideosContext"
import { Link } from "react-router-dom";
import TituloCategoria from "../TituloCategoria";

const DivBanner = styled.div`
width: 100%;
height: 31.25rem;
display: flex;
justify-content: space-between;
align-items: center;
gap: 24px;
margin: 20px 0;
padding: o 40px;
background: url(${(props) => props.$capa});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
border: 4px solid #ff230f;
cursor: pointer;
div{
    display: flex;
    flex-direction: column;
    width: 100%;
}
h3{
    font-size:  48px;
    margin: 20px 0;
}
p{
    font-size: 18px;
    color: #f5f5f5;
    text-align: justify;
}
img{
    width: 100%;
    max-width: 18.75rem;
    align-self: center;
}
`

const Banner = () => {
    const videos = useVideosContext().videos;
    const categorias = useVideosContext().categorias;

    if (videos.length === 0 || categorias.length === 0) {
        return null;
    }

    const numeroAleatorio = Math.floor(Math.random() * (videos.length));
    const bannerVideo = videos[numeroAleatorio];
    const bannerCategoria = categorias.filter((categoria) => categoria.nome === bannerVideo.categoria);
    const categoriaCor = bannerCategoria[0].color;

    return (
        <Link to={`/${bannerVideo.id}`}>
            <DivBanner $capa={bannerVideo.capa}>
                <div>
                    <TituloCategoria color={categoriaCor}>
                        {bannerVideo.categoria}
                    </TituloCategoria>
                    <h3>{bannerVideo.titulo}</h3>
                    <p>{bannerVideo.descricao}</p>
                </div>
                <div>
                    <img src={bannerVideo.capa} alt={bannerVideo.titulo} />
                </div>
            </DivBanner>
        </Link>
    )
}

export default Banner