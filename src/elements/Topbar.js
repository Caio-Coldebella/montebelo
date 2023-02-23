import styled from "styled-components";
import { sendmessage, openmaps } from "./redirectfunctions";
import { useLocation, useNavigate } from "react-router-dom";
import whatsapp from "../assets/whatsapplogo.png";
import maps from "../assets/maps.png";
import { IoHome, IoImages } from "react-icons/io5";

export default function Topbar() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <CONTENT>
            {location.pathname==="/"?
            <ITEM onClick={() => {navigate("/galeria");}}>
                <IoImages size={30} color="#F5F5F5"/>
                <p>Galeria</p>
            </ITEM>:
            <ITEM onClick={() => {navigate("/");}}>
                <IoHome size={30} color="#F5F5F5"/>
                <p>Início</p>
            </ITEM>}
            <ITEM onClick={() => {sendmessage();}}>
                <img src={whatsapp} alt="whatsapplogo"/>
                <p>Atendimento</p>
            </ITEM>
            <ITEM onClick={() => {openmaps();}}>
                <img src={maps} alt="mapslogo"/>
                <p>Como chegar</p>
            </ITEM>
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
    box-shadow: 0 5px 5px rgba(0,0,0,0.6);
    & p {
        word-break: keep-all;
        font-weight: bold;
        text-decoration: underline;
    }
`;

const ITEM = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: auto;
    padding: 4px 0 4px 0;
    & img {
        height: 30px;
        width: 30px;
    }
    & p {
        font-size: 10px;
        font-weight: bold;
        text-decoration: underline;
        color: #FFFFFF;
    }
`;