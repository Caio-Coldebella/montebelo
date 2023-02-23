import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { sendmessage, openmaps } from "./redirectfunctions";
import styles from "./styles";
import Topbar from "./Topbar";
import Topdiv from "./Topdiv";
import Vitrine from "./Vitrine";
import whatsapp from "../assets/whatsapplogo.png";
import maps from "../assets/maps.png";

export default function Home() {
    return (
        <styles.CONTENT>
            <Topdiv/>
            <Topbar/>
            <styles.PRESENTDIV>
                <styles.TEXTDIV>
                    <p>Produtos de cerâmica vermelha com os mais elevados padrões de qualidade, de acordo com as normas em vigor e de forma sustentável, proporcionando maior segurança e proteção às construções e a satisfação dos nossos clientes</p>
                </styles.TEXTDIV>
                <styles.LOGOSDIV>
                <styles.ICON onClick={() => {sendmessage();}}>
                    <img src={whatsapp} heigth="50px" width="50px" alt="whatsapplogo"/>
                    <p>Atendimento</p>
                </styles.ICON>
                <styles.ICON onClick={() => {openmaps();}}>
                    <img src={maps} heigth="50px" width="50px" alt="mapslogo"/>
                    <p>Como chegar</p>
                </styles.ICON>
            </styles.LOGOSDIV>
            </styles.PRESENTDIV>
            <h1>Nossos produtos</h1>
            <Vitrine/>
        </styles.CONTENT>
    );
}