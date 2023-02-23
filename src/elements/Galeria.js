import styles from "../elements/styles";
import Topbar from "../elements/Topbar";
import foto from "./fotosgaleria";

class Galery {
    constructor(name, arrphotos) {
        this.name = name;
        this.arrphotos = arrphotos;
    }
}

const arraygalerie = [new Galery("• Estoque", foto.estoques),
 new Galery("• Paredes Decorativas", foto.parede),
 new Galery("• Churrasqueiras com Tijolos Maciços", foto.churasqueiras),
 new Galery("• Nossa Empresa", foto.empresa)];

export default function Galeria() {
    return (
        <styles.CONTENT>
            <Topbar/>
            {arraygalerie.map((el,index) => {return <><h2>{el.name}</h2><styles.GALLERY>
                {el.arrphotos.map((el2, index2) => {return <styles.GALERIEPHOTOS src={el2} alt={index2}/>})}
            </styles.GALLERY></>})}
        </styles.CONTENT>
    );
}