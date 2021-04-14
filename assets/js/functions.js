// função para calcular a hipotenusa de um triangulo retangulo
function hipotenuse (cA, cO){
    function quadratic(x) {return x * x}
    //chama a função quadratic que retorna o quadrado dos catetos.
    //retorna a raiz da soma dos quadrados dos catetos
    // os parametros passados pela função hipotenuse estão acessíveis na função quadratic
    return Math.sqrt(quadratic(cA) + quadratic(cO)).toFixed(2) 
}

console.log(hipotenuse(2,5))


//função para calcular o fatoria de um numero de
function factorial(x){
    if(x <= 1) return 1
    // a função execulta a si mesmo no retorno como se fosse um loop
    // a mesma mantem um fluxo de chamadas de si proprio sempre decrementando a variavel x
    return x * factorial(x - 1)
}

console.log(factorial(5))

