import styled from "styled-components";
import { sendmessage, openmaps } from "./redirectfunctions";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
    const navigate = useNavigate();
    return (
        <CONTENT>
            <p onClick={() => {navigate("/");}}>Início</p>
            {/*<p onClick={() => {sendmessage();}}>Atendimento</p>
            <p onClick={() => {openmaps();}}>Como chegar</p>*/}
            <p onClick={() => {navigate("/galeria");}}>Galeria de fotos</p>
        </CONTENT>
    );
}

const CONTENT = styled.div`
    position: sticky;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
    width: 100%;
    background-color: #bd2e32;
    & p {
        word-break: keep-all;
        font-weight: bold;
        text-decoration: underline;
    }
`;