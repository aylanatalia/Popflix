import styled from "styled-components"
import Cabecalho from "../../componentes/Cabecalho"
import EstilosGlobais from "../../componentes/EstilosGlobais"
import Rodape from "../../componentes/Rodape"
import Banner from "../../componentes/Banner"
import { useState } from "react"

const Fundo = styled.div`
  background-color: #420522;
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
width: 1270px;
max-width: 100%;
margin:  0;
`

const PaginaBase = () => {
  return (
    <Fundo>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <Rodape />
      </AppContainer>
    </Fundo>
  )
}

export default PaginaBase