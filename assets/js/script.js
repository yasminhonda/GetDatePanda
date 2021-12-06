const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = getData(data);

function getData (data) {
    const diaSemana = data.getDay();
    const mes = data.getMonth();

    const semana = getDiaSemana(diaSemana);
    const meses = getMes(mes);

    return `${semana}<br>${data.getDate()} de ${meses} de ${data.getFullYear()}<br> ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
}

function getDiaSemana (diaSemana) {
    const semanaTexto = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return semanaTexto[diaSemana];
}

function getMes (mes) {
    const mesTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return mesTexto[mes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}