import styled  from "styled-components";


const CategoriaTituloEstilos = styled.h2`
    display: flex;
    width: 27rem;
    height: 4.37rem;
    border-radius: 15px;
    justify-content: center;
    font-size: 32px;
    color: white;
    background-color:  ${(props) => props.$corFundo};
    text-align: center;
`

const TituloCategoria = ({ children, color }) =>{
    return(
        <CategoriaTituloEstilos $corFundo={color}>
            {children}
        </CategoriaTituloEstilos>
    )
}

export default TituloCategoria