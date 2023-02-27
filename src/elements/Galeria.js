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
 new Galery("• Nossa Empresa", foto.empresa),
 new Galery("• Produção", foto.automatismo)
];

export default function Galeria() {
    return (
        <styles.CONTENT>
            <Topbar/>
            {arraygalerie.map((el,index) => {return <><h2>{el.name}</h2><styles.GALLERY key={index}>
                {el.arrphotos.map((el2, index2) => {return <styles.GALERIEPHOTOS key={index2} src={el2} alt={`media_${index}_${index2}`}/>})}
            </styles.GALLERY></>})}
        </styles.CONTENT>
    );
}