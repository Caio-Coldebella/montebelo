import styles from "./styles";
import seisfuros from "../assets/tijolos6furos/6furospadraooficial.jpeg";
import seisfuros24 from "../assets/tijolos6furos/6furos24cm.jpeg";
import bandinha from "../assets/tijolos6furos/oficial.jpeg";
import oitofurospadrao from "../assets/tijolos8furos/8furospadraooficial.jpeg";
import oitofuros24 from "../assets/tijolos8furos/8furos24oficial.jpeg";
import macicoreto from "../assets/tijolosmacico/macicoreto.jpeg";
import macicocurvo from "../assets/tijolosmacico/macicocurvoupdate.jpeg";
import lajota from "../assets/lajota/lajotah7edit.jpeg";

class Product {
    constructor(name, desc, image) {
        this.name = name;
        this.desc = desc;
        this.image = image;
    }
}

const arrayproducts = [
    new Product("Tijolo de 6 furos padrão", "Dimensões: 9x14x19 cm", seisfuros),
    new Product("Tijolo de 6 furos 24 cm", "Dimensões: 9x14x24 cm", seisfuros24),
    new Product("Meio-tijolo de 6 furos", "Dimensões: 9x14x9,5 cm", bandinha),
    new Product("Tijolo de 8 furos padrão", "Dimensões: 9x19x19 cm", oitofurospadrao),
    new Product("Tijolo de 8 furos 24 cm", "Dimensões: 9x19x24 cm", oitofuros24),
    new Product("Tijolo Maciço Reto", "Dimensões: 5,3x9x19 cm", macicoreto),
    new Product("Tijolo Maciço Curvo", "Dimensões: 5,3x9x19 cm", macicocurvo),
    new Product("Lajota H7", "Dimensões: 7x19x28 cm", lajota)
];

export default function Vitrine() {
    return (
        <styles.GALLERY>
        {arrayproducts.map((el,index) => 
            {return <styles.PRODUCT key={index}>
                <img src={el.image} alt={`media_${index}`}/>
                <div>
                <h1>{el.name}</h1>
                <p>{el.desc}</p>
                </div>
            </styles.PRODUCT>;})}
     </styles.GALLERY>
    );
}