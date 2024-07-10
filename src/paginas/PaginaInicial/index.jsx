import Banner from "../../componentes/Banner"
import { useVideosContext } from "../../Contexto/VideosContext"
import Galeria from "../../componentes/Galeria"


const PaginaInicial = () => {
    const selecionado = useVideosContext().selecionado
    return (
        <>
            <Banner />
            <Galeria />
            
        </>
    )
}

export default PaginaInicial