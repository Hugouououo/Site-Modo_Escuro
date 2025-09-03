let escuro = document.getElementById('escuro')
let claro = document.getElementById('claro')

escuro.addEventListener('click',()=>{
    document.body.classList.add('escuro')
    document.body.classList.remove('claro')
})

claro.addEventListener('click',()=>{
    document.body.classList.add('claro')
    document.body.classList.remove('escuro')
})