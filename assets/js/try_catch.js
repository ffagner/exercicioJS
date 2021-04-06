// uso do try e do catch
// usado para lançar log de erros

// exemplo1

// try {
//     execultada quando não ocorre erro
// } catch (error) {
//     execultada quando ocorre erro
// }

// console.log(test) // ReferenceError: test is not defined
// try {
//     console.log(test) 
// }catch(err){
//     console.log('erro de definição de variavel')
// }
//exemplo2
function quadratic(num){
    if(typeof num != 'number'){
        throw('erro')
    }
    return num * num
}

console.log(quadratic('5'))