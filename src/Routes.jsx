import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "./paginas/PaginaBase"
import PaginaInicial from "./paginas/PaginaInicial"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<PaginaInicial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
