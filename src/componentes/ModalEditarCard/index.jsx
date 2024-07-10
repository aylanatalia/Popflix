import styled from "styled-components";
import { useVideosContext } from "../../Contexto/VideosContext";
import Formulario from "../Formulario";
import botaoX from "./X - cancel.png"

const Overlay = styled.div`
    background-color: #000000b2;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`

const DialogEstilos = styled.dialog`
    position: absolute;
    top: 380px;
    left: 0;
    width: 23.37rem;
    background-color: #4c007d;
    padding: 70px 0 60px 0;
    border: 4px solid #1b004b;
    border-radius: 15px;
`

const TituloDialog = styled.h2`
    width: 100%;
    margin-bottom:  40px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 32px;
    color: white;
    text-align: center;
`

const BotaoFechar = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const ModalEditarCard = ({selecionado})=>{
    const videoContext = useVideosContext();

    function fecharModal(){
        videoContext.editarCard(null)
    }

    return(
        selecionado && <>
            <Overlay onClick={()=> fecharModal()}/>
                <DialogEstilos onClose={()=> fecharModal()} open={!!selecionado}>
                    <TituloDialog>Editar o card:</TituloDialog>
                    <Formulario method="dialog" video={selecionado} />
                    <BotaoFechar onClick={() => fecharModal()}>
                        <img src={botaoX} alt="Botão fechar"/>
                    </BotaoFechar>
                </DialogEstilos>
        
        </>
    )
}

export default ModalEditarCard