//setInterval e setTimeout
// função retorna a hora atual no formato br 00:00:00
function hours(){
    let data = new Date(00-00-00)
    return data.toLocaleTimeString('pt-br', {hour12:false}) // formatar a string para o formato de hora brasileiro
}

// setInterval(() => console.log(hours()), 1000) // a função cria um time de execução a cada segundo

const timer = setInterval(() => console.log(hours()), 1000) // retorna à variavel um time de 1 segundo

setTimeout(() => {
    clearInterval(timer)
}, 5000);

// setTimeout(() => {
//     console.log('fim do tempo')
// }, 2000);