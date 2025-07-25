AOS.init();
const dataAlvo = new Date('2025-08-29T19:00:00');
const dataFim = new Date('2025-08-29T22:00:00');

function atualizarContador() {
    const agora = new Date();
    
    if (agora >= dataFim) {
        document.getElementById('contador').innerHTML = "O evento já terminou!";
        document.getElementById('msg').innerHTML = "Obrigado por participar! foi um prazer ter você conosco.";
        clearInterval(intervalo);
        return;
    }
    
    if (agora >= dataAlvo && agora < dataFim) {
        document.getElementById('contador').innerHTML = "O evento está acontecendo!";
        document.getElementById('msg').innerHTML = "Venha comemorar conosco e aproveite o evento!";
        return;
    }
    
    const diferenca = dataAlvo - agora;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
    
    document.getElementById('contador').innerHTML = `
    💖 ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💖`;
    document.getElementById('msg').innerHTML = "Esperamos você para tornar este dia inesquecível!";
}

const intervalo = setInterval(atualizarContador, 1000);
atualizarContador();
