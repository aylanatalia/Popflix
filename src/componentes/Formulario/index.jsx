import styled from "styled-components";
import { useVideosContext } from "../../Contexto/VideosContext";
import { useEffect, useState } from "react";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import AreaTexto from "../AreaTexto";
import Botao from "../Botao";

const FormularioEstilos = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 575px;
    margin: 0 auto;
`

const DivBotao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    max-width: 525px;
`

const Formulario = ({ video }) => {
    const videoContext = useVideosContext();
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [capa, setCapa] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo);
            setCategoria(video.categoria);
            setCapa(video.capa);
            setLink(video.link);
            setDescricao(video.descricao);
        }
    }, ([]))

    function submeterFormulario(evento) {
        evento.preventDefault();
        videoContext.editarCard(null);
        const novoVideo = {
            "titulo": titulo,
            "categoria": categoria,
            "capa": capa,
            "link": link,
            "descricao": descricao
        }

        if (video) {
            novoVideo.id = video.id;
            videoContext.atualiarVideo(novoVideo);
        } else {
            videoContext.adicionarVideo(novoVideo);
        }
        limparCampo();
    }

    function limparCampo() {
        setTitulo("");
        setCategoria("");
        setCapa("");
        setLink("");
        setDescricao("");
    }

    return (
        <FormularioEstilos onSubmit={(evento) => submeterFormulario(evento)}>
            <CampoTexto
                label="Titulo"
                id="titulo"
                type="text"
                value={titulo ? titulo : ""}
                placeholder="Insira o título do vídeo"
                handleChange={(value) => setTitulo(value)}
            />
            <ListaSuspensa
                id='categoria'
                categorias={videoContext.categorias}
                value={categoria ? categoria : ""}
                handleChange={(value) => setCategoria(value)}
            />
            <CampoTexto
                label="Capa"
                id="capa"
                type="url"
                value={capa ? capa : ""}
                placeholder="Insira o link da capa"
                handleChange={(value) => setCapa(value)}
            />
            <CampoTexto
                label="Link video"
                id="link-video"
                type="url"
                value={link ? link : ""}
                placeholder="Insira o video do link com embed"
                handleChange={(value) => setLink(value)}
            />
            <AreaTexto
                label="Descrição"
                id="descricao"
                value={descricao ? descricao : ""}
                placeholder="Insira a descrição do seu vídeo"
                handleChange={(value) => setDescricao(value)}
            />
            <DivBotao>
                <Botao type="submit">
                    Salvar
                </Botao>
                <Botao type="reset" onClick={()=>limparCampo()}>
                    Limpar
                </Botao>
            </DivBotao>
        </FormularioEstilos>
    )
}

export default Formulario