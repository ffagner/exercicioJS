const classParagraph = document.querySelector('.paragraph')
const paragraph = document.querySelectorAll('p')

const style = getComputedStyle(document.body)
const styleParagraph = style.backgroundColor

// seleção de paragrafos usando interações e aplicando style css em todos os paragrafos iterados
for (const p of paragraph){
    p.style.backgroundColor = styleParagraph
    p.style.margin = '15px'
    p.style.padding = '5px'
    p.style.color = '#fff'
}