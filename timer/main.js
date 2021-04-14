let secund = () => {
    let s = tSeg++
    let m = tMin
    let h = tHour 
    if(m >= 59){
        h = tHour++
        tMin = 0
    }
    if(s >= 59){
        m = tMin++
        tSeg = 0       
    }
    if (s < 10){
        s = '0'+s
    }
    if(m < 10){
        m = '0' + m
    }
    if (h < 10){
        h = '0' + h
    } 
    return [h.toString(), m.toString(),s.toString()]
}
const relogio = document.querySelector('.time')
const btInit = document.querySelector('#iniciar')
const btPause = document.querySelector('#pausar')
const btZero = document.querySelector('#zerar')
let tSeg = 1
let tMin = 0
let tHour = 0
let status = null
let estado = true
let intervalo = 1000

function htmlTime(timer){
    
    relogio.style.color = "rgb(17, 86, 102)"
    relogio.innerHTML = `${timer[0]}:${timer[1]}:${timer[2]}`
}

let myTime = () => {
    estado = false
    status = setInterval(() => htmlTime(secund()), intervalo)
}
btInit.addEventListener('click', (e) => {
    clearInterval(status)
    myTime()

})
btZero.addEventListener('click', (e) => {
    clearInterval(status)
    tHour = 0
    tMin = 0
    tSeg = 0
    relogio.innerHTML = '00:00:00'
    relogio.style.color = "red"   
})
btPause.addEventListener('click', (e) => {
    relogio.style.color = "red"
    clearInterval(status)
})


