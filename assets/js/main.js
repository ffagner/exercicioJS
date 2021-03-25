function calImc() {

  let form = document.querySelector(".dados");
  let resul = document.querySelector(".resultado");
  let tabela = document.querySelector(".tabela");

  function capData(evento) {
    evento.preventDefault();
    window.location.reload()

    let weight = document.querySelector(".weight");
    let height = document.querySelector(".height");
    weight = parseFloat(weight.value);
    height = parseFloat(height.value);
    // formula de calculo do IMC: peso/altura*altura
    let cal = (w, h) => {
      return w / h ** 2;
    };
    cal = cal(weight, height).toFixed(2);
    let valor = parseFloat(cal);
    
    function determinar (val) {
        if(val < 18.50){
        const row1 = document.getElementById('nivel1')
        row1.style.backgroundColor = "rgba(17, 86, 102, .3)";

    }   else if (valor >= 18.50 && valor <= 24.90) {
        const row1 = document.getElementById('nivel2')       
        row1.style.backgroundColor = "rgba(17, 86, 102, .3)";

    }   else if (valor >= 25.00 && valor <= 29.90) {
        const row1 = document.getElementById('nivel3')
        row1.style.backgroundColor = "rgba(17, 86, 102, .3)";

    }   else if (valor >= 30.00 && valor <= 34.90) {
        const row1 = document.getElementById('nivel4')
        row1.style.backgroundColor = "rgba(17, 86, 102, .3)";

    }   else if (valor >= 35.00 && valor <= 40.90) {
        const row1 = document.getElementById('nivel5')
        row1.style.backgroundColor = "rgba(17, 86, 102, .3)";

    }   else if (valor >= 40.00) {
        const row1 = document.getElementById('nivel6')
        row1.style.backgroundColor = "rgba(17, 86, 102, .3)";      
    }
}

    determinar(valor)
    resul.innerHTML = `<div>${cal}</div>`;
  }

  form.addEventListener("submit", capData);
}
calImc();
