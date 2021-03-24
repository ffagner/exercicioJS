function calImc (){
let form = document.querySelector('.dados');
let resul = document.querySelector('.resultado');
let tabela = document.querySelector('.tabela');

function capData(evento){
    evento.preventDefault()

    let weight = document.querySelector('.weight');
    let height = document.querySelector('.height');
    weight = parseFloat(weight.value);
    height = parseFloat(height.value);
    // formula de calculo do IMC: peso/altura*altura
    const cal = (w, h) => {return w/h**2}
    resul.innerHTML = `<div>${cal(weight, height)}</div>`
    

}



form.addEventListener('submit', capData)
}
calImc();

