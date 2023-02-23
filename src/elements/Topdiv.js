import styles from "./styles";
import logo from "../assets/logoceramica.png";
import { IoLocationSharp, IoLogoWhatsapp, IoAlarm, IoMail, IoCall } from "react-icons/io5";
export default function Topdiv() {
    return (
    <styles.WRAPDIV>
        <styles.LOGO src={logo} alt="logo" onClick={null}/>
        <styles.TOPDIVBOX>
            <IoLocationSharp size={40}/>
            <p>Estrada 13 de setembro, km 4,5</p>
        </styles.TOPDIVBOX>
        <styles.TOPDIVBOX>
            <IoCall size={40}/>
            <p>• (69) 99984-5332</p>
            <p>• (69) 3026-3940</p>
            <p>ceramicamontebello@hotmail.com</p>
        </styles.TOPDIVBOX>
        <styles.TOPDIVBOX>
            <IoAlarm size={40}/>
            <p>Seg à Sex: 7h30 - 12h e 13h30 - 18h <br/><br/>Sáb: 7h30 - 12h</p>
        </styles.TOPDIVBOX>
        <styles.MOBILETOP>
            <span><IoLocationSharp size={22}/><p>Estrada 13 de setembro, km 4,5</p></span>
            <span><IoLogoWhatsapp size={22}/><p>• (69) 99984-5332</p></span>
            <span><IoCall size={22}/><p>• (69) 3026-3940</p></span>
            <span><IoMail size={22}/><p>ceramicamontebello@hotmail.com</p></span>
            <span><IoAlarm size={22}/><p>Seg à Sex 7h30 - 12h e 13h30 - 18h</p></span>
            <span><p>Sáb 7h30 - 12h</p></span>
        </styles.MOBILETOP>
    </styles.WRAPDIV>
    );
}