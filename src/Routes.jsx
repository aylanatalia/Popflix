import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "./paginas/PaginaBase"





function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
