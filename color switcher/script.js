const btn = document.querySelectorAll(".btn");
const body = document.querySelector("body");

btn.forEach(function(btn){
    console.log(btn)
    btn.addEventListener("click", function(e){
        const computedStyle = window.getComputedStyle(e.target);
        const backgroundColor = computedStyle.backgroundColor;
        console.log(e);
        console.log(e.target.className)
        if (e.target.classList.contains(1)) {
            body.style.backgroundColor = backgroundColor;
        }else if(e.target.classList.contains(2)){
            body.style.backgroundColor = backgroundColor;
        }else if(e.target.classList.contains(3)){
            body.style.backgroundColor = backgroundColor;
        }else if(e.target.classList.contains(4)){
            body.style.backgroundColor = backgroundColor;
        }else if(e.target.classList.contains(5)){
            body.style.backgroundColor = backgroundColor;
        }else if(e.target.classList.contains(6)){
            body.style.backgroundColor = backgroundColor;
        }else if(e.target.classList.contains(7)){
            body.style.backgroundColor = backgroundColor;
        }else if(e.target.classList.contains(8)){
            body.style.backgroundColor = backgroundColor;
        }else if(e.target.classList.contains(9)){
            body.style.backgroundColor = backgroundColor;
        }
    })
})