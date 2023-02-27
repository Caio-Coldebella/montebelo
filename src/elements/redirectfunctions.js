const linkmaps = "https://www.google.com/maps/dir//ceramica+monte+belo/@-8.8021084,-63.8781392,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x92325b201214abc3:0x2cc48fbe8482684a!2m2!1d-63.8633102!2d-8.820717";
const phone = "5569999845332";

export function sendmessage() {
    const message = encodeURIComponent("Olá, gostaria de falar com um dos atendentes!");
    let link = `https://wa.me/${phone}?text=`;
    window.open(link+message);
}

export function openmaps() {
    window.open(linkmaps);
}