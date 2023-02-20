import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { sendmessage, openmaps } from "./redirectfunctions";
import styles from "./styles";
import tijolo from "../assets/tijolo.jpg"
import azul from "../assets/azul.jpg"

export default function Home() {
    return (
        <styles.CONTENT>
            <styles.LOGO src={azul}/>
            <styles.TEXTDIV>
                <p>Estada 13 de setembro</p>
                <p>69 99999-9999</p>
            </styles.TEXTDIV>
            <styles.TEXTDIV>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis mi, sodales nec purus sed, convallis malesuada nunc. Nulla facilisi. Pellentesque luctus, sem non hendrerit rhoncus, libero libero finibus libero, aliquam fermentum lorem ex non lacus. Aliquam erat volutpat. In.</p>
            </styles.TEXTDIV>
            <styles.LOGOSDIV>
                <styles.ICON onClick={() => {sendmessage();}}>
                    <IoLogoWhatsapp size={50} fill="green"/>
                    <p>Atendimento</p>
                </styles.ICON>
                <styles.ICON onClick={() => {openmaps();}}>
                    <IoLocationSharp size={50}/>
                    <p>Como chegar</p>
                </styles.ICON>
            </styles.LOGOSDIV>
            <h1>Nossos produtos</h1>
            <styles.PRODUCT>
                <h1>Tijolo de 6 furos</h1>
                <img src={azul} alt="tijolo6furos"/>
            </styles.PRODUCT>
            <styles.PRODUCT>
                <h1>Tijolo de 6 furos</h1>
                <img src={azul} alt="tijolo6furos"/>
            </styles.PRODUCT>
            <styles.PRODUCT>
                <h1>Tijolo de 6 furos</h1>
                <img src={azul} alt="tijolo6furos"/>
            </styles.PRODUCT>
        </styles.CONTENT>
    );
}