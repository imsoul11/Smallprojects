let fo = document.querySelector('.for');
let elementstomove = document.querySelectorAll('.leftright');
let i = 0;
let j = 0;

function transright() {
    if(i==-120)
    {
        lo.style.backgroundColor = "gray";
        lo.style.transitionDuration = '0.3s';
        setTimeout(function() {
            lo.style.backgroundColor = ""; // set it back to the original color (or another color if needed)
        }, 200); // 1000 milliseconds = 1 second
        return
    }
    i -= 40; // Use a fixed value for consistent movement
    
    for (const iterator of elementstomove) {
        iterator.style.transform = `translateX(${i}vw)`;
        iterator.style.transitionDuration = '0.5s';
    }
}

fo.addEventListener('click', transleft);

let lo = document.querySelectorAll('.for')[1];

function transleft() {
    if(i==0)
    {fo.style.backgroundColor = "gray";
    fo.style.transitionDuration = '0.3s';
    setTimeout(function() {
        fo.style.backgroundColor = ""; // set it back to the original color (or another color if needed)
    }, 200);
        return
    }
    i += 40; // Use a fixed value for consistent movement
    for (const iterator of elementstomove) {
        iterator.style.transform = `translateX(${i}vw)`;
        iterator.style.transitionDuration = '0.5s';
    }
}

lo.addEventListener('click', transright);
let back=document.querySelector('#back')
back.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        
      })
})


let sidebar=document.querySelector('.sidebar')
// sidebar.addEventListener('mouseenter',()=>{
//     sidebar.parentElement.style.overflow="hidden"
// })
// sidebar.addEventListener('mouseleave',()=>{
//     sidebar.parentElement.style.overflow=""
// })




let seeall = document.querySelectorAll('.seeall')[0];
let l = 0;

// Create and append newdiv1 to newdiv5 initially
let newdiv1 = document.createElement("div");
newdiv1.className = "sidebarcont marg";
newdiv1.innerHTML = "Home, Kitchen, Pets";

let newdiv2 = document.createElement("div");
newdiv2.className = "sidebarcont marg";
newdiv2.innerHTML = "Beauty, Health, Grocery";

let newdiv3 = document.createElement("div");
newdiv3.className = "sidebarcont marg";
newdiv3.innerHTML = "Sports, Fitness, Bags, Luggage";

let newdiv4 = document.createElement("div");
newdiv4.className = "sidebarcont marg";
newdiv4.innerHTML = "asdhasdj";

let newdiv5 = document.createElement("div");
newdiv5.className = "sidebarcont marg";
newdiv5.innerHTML = "Books";

newdiv1.style.display = "none";
newdiv2.style.display = "none";
newdiv3.style.display = "none";
newdiv4.style.display = "none";
newdiv5.style.display = "none";

// Append the elements initially with display: none
seeall.insertAdjacentElement('afterend', newdiv1);
seeall.insertAdjacentElement('afterend', newdiv2);
seeall.insertAdjacentElement('afterend', newdiv3);
seeall.insertAdjacentElement('afterend', newdiv4);
seeall.insertAdjacentElement('afterend', newdiv5);

seeall.addEventListener('click', () => {
    l++;


    if (l % 2 !== 0) {
        seeall.innerHTML = "See Less";
        seeall.style.backgroundColor = "#f2f2f2";
        seeall.addEventListener('mouseenter', () => {
            seeall.style.backgroundColor = "#f2f2f2";
        });

        seeall.addEventListener('mouseleave', () => {
            seeall.style.backgroundColor = "#f2f2f2";
        });
    }

    if (l % 2 === 0) {
        seeall.innerHTML = 'See All <img src="down.png" alt="">';
        seeall.style.backgroundColor = "#ffffff";

        seeall.addEventListener('mouseenter', () => {
            seeall.style.backgroundColor = "#f2f2f2";
        });

        seeall.addEventListener('mouseleave', () => {
            seeall.style.backgroundColor = "#ffffff";
        });
    }

    // Toggle the display property on every click
    newdiv1.style.display = l % 2 === 0 ? "none" : "block";
    newdiv2.style.display = l % 2 === 0 ? "none" : "block";
    newdiv3.style.display = l % 2 === 0 ? "none" : "block";
    newdiv4.style.display = l % 2 === 0 ? "none" : "block";
    newdiv5.style.display = l % 2 === 0 ? "none" : "block";
});
const all=document.querySelector("#all")
let sidebarisout=false;
all.addEventListener('click',()=>{
    console.log('it is out')
    sidebarisout=true;
    // sidebar.style.transform = 'translateX(35vw)';
    sidebar.classList.remove('transxneg');
    sidebar.classList.add('transx');
    cards.style.filter="brightness(0.4)"
    caroimg.style.filter="brightness(0.4)"
    caroimg2.style.filter="brightness(0.4)"
    caroimg3.style.filter="brightness(0.4)"
    leftrightcard.style.filter="brightness(0.4)"
    sidebar.parentElement.style.overflow="hidden"
})
let caroimg=document.querySelectorAll('.d-block')[0]
let caroimg2=document.querySelectorAll('.d-block')[1]
let caroimg3=document.querySelectorAll('.d-block')[2]
let bo=document.querySelector('body')
let cards=document.querySelectorAll('.cardholder')[0]
let leftrightcard=document.querySelector('.leftrightcard')
const backimg=document.querySelector('#backimg')
backimg.addEventListener('click',()=>{
    // sidebar.style.transform = 'translateX(-25vw)';
    sidebar.classList.add('transxneg');
    sidebar.classList.remove('transx');
    console.log('dffd')
    cards.style.filter="brightness(1)"
    caroimg.style.filter="brightness(1)"
    caroimg2.style.filter="brightness(1)"
    caroimg3.style.filter="brightness(1)"
    leftrightcard.style.filter="brightness(1)"
    sidebarisout=false;
    sidebar.parentElement.style.overflow="scroll"
    
})
