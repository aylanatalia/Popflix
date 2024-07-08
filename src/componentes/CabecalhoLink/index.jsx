import { Link } from "react-router-dom";
import styled from "styled-components";

const TextoEstilizado = styled.p`
color: white;
text-align: center;
display: flex;
justify-content: center;
`

const CabecalhoLink = ({url, children}) => {
    return(
        <nav>
            <Link to={url}>
                <TextoEstilizado>{children}</TextoEstilizado>
            </Link>
        </nav>
    )

}

export default CabecalhoLink