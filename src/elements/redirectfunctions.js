const linkmaps = "//www.google.com/maps/dir/-8.8113152,-63.8255104/ceramica+monte+belo/@-8.8021084,-63.8781392,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x92325b201214abc3:0x2cc48fbe8482684a!2m2!1d-63.8633102!2d-8.820717";
const phone = "69984553060";

export function sendmessage() {
    const message = encodeURIComponent("Olá");
    let link = `https://wa.me/${phone}?text=`;
    window.open(link+message);
}

export function openmaps() {
    window.open(linkmaps);
}