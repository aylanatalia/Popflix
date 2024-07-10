import axios from "axios";
import {  createContext, useContext, useEffect, useState } from "react"

const videosApi = 'https://my-json-server.typicode.com/aylanatalia/popflix-api/VideoClipes'
const categoriasApi = 'https://my-json-server.typicode.com/aylanatalia/popflix-api/Categorias'

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export default function VideosProvider({children}){
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios.get(videosApi).then(response => {
            setVideos(response.data)
        })
    }, [])

    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        axios.get(categoriasApi).then(response => {
            setCategorias(response.data)
        })
    }, [])

    const [selecionado, setSelecionado] = useState(null)

    return(
        <VideosContext.Provider value={{videos, setVideos, categorias, setCategorias, selecionado, setSelecionado}}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideosContext(){
    const {videos, setVideos} = useContext(VideosContext)
    const {categorias, setCategorias} = useContext(VideosContext)
    const {selecionado, setSelecionado} = useContext(VideosContext)

    function editarCard(video){
        video ? window.scrollTo(0,350) : "";
        setSelecionado(video);
    }

    function adicionarVideo(video){
        axios.post(videosApi, {
            "titulo": video.titulo,
            "categoria": video.categoria,
            "capa": video.capa,
            "link": video.link,
            "descricao": video.descricao
        }).then((response) =>{
            setVideos([...videos, response.data])
            alert('O seu vídeo foi adicionado com sucesso')
        })
    }

    function atualiarVideo(video){
        axios.put(`${videosApi}/${video.id}`,{
            "titulo": video.titulo,
            "categoria": video.categoria,
            "capa": video.capa,
            "link": video.link,
            "descricao": video.descricao
    }).then(() =>{
        setVideos(videos.map(esteVideo => esteVideo.id === video.id ? video : esteVideo))
        alert("Vídeo editado")
    })
    }

    function deletarVideo(video){
        axios.delete(`${videosApi}/${video.id}`).then(()=>{
            setVideos(videos.filter((esteVideo) => esteVideo.id !== video.id))
        })
    }

    return{
        videos,
        categorias,
        selecionado,
        editarCard,
        adicionarVideo,
        atualiarVideo,
        deletarVideo
    }
}