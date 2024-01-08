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
