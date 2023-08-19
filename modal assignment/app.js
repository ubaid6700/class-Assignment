var btn = document.querySelector('#btn')
var x = document.querySelector('.x')
var modaltime = document.querySelector('#ismodaltime')

btn.addEventListener('click', ()=>{
    modaltime.style.visibility = 'visible'
})

x.addEventListener('click', ()=>{
    modaltime.style.visibility = 'hidden'
})