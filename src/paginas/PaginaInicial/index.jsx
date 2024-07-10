import Banner from "../../componentes/Banner"
import { useVideosContext } from "../../Contexto/VideosContext"
import Galeria from "../../componentes/Galeria"
import ModalEditarCard from "../../componentes/ModalEditarCard"


const PaginaInicial = () => {
    const selecionado = useVideosContext().selecionado
    return (
        <>
            <Banner />
            <Galeria />
            <ModalEditarCard selecionado={selecionado}/>
        </>
    )
}

export default PaginaInicial