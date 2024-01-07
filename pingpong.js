let changemaxscore=document.querySelector('.changemaxscore')
let inputrange=document.querySelector('input[type="range"]')
inputrange.addEventListener('input',(e)=>{
    changemaxscore.innerHTML=`${inputrange.value} points`
})
let i=0 
let j=0
let player1=document.querySelector('#player1')
let sel=document.querySelector('.gre')

player1.addEventListener('click',(e)=>{
    if(i+1>inputrange.value || j+1>inputrange.value)
    {
        sel.setAttribute('id',"col")
        return
    }
    i++;
    let changeit=document.querySelector('#score')
    changeit.innerHTML=`<span class="gre">${i}</span> to ${j}`
})
player2.addEventListener('click',(e)=>{
    if(j==inputrange.value || i==inputrange.value)
    {
        return
    }
    j++;
    let changeit=document.querySelector('#score')
    changeit.innerHTML=`${i} to ${j}`
})
let reset=document.querySelector('#reset')
reset.addEventListener('click',(e)=>{
    let changeit=document.querySelector('#score')
    i=0
    j=0
    changeit.innerHTML=`${i} to ${j}`
    
})

