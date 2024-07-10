import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "./paginas/PaginaBase"
import PaginaInicial from "./paginas/PaginaInicial"
import PaginaNovoVideo from "./paginas/PaginaNovoVideo"
import Player from "./paginas/Player"
import NaoEncontrada from "./paginas/NaoEncontrado"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<PaginaInicial />} />
          <Route path="novovideo" element={<PaginaNovoVideo/>}/>
          <Route path=":id" element={<Player/>}/>
          <Route path="*" element={<NaoEncontrada/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
