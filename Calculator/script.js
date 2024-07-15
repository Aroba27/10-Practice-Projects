const btns = document.querySelectorAll('button');
const equal = document.querySelector('#equal');
const result = document.querySelector('#result');

let expression = result.textContent;


/******
Array.from(btn).forEach((btn)=>{
    btn.addEventListener('click', function(e){
       console.log(e.target)
    result.innerHTML = e.value

    })
})  



btns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        console.log(e.target);
        result.textContent = e.target.textContent; // Use e.target to access the clicked button
    });
});
*/

btns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        if (e.target.innerHTML == '=') {
            try {
                let calculatedValue = eval(expression);
                result.textContent = calculatedValue;
            } catch (error) {
                result.textContent = "Syntax Error!";
            }

        } else if (e.target.innerHTML == 'C') {
            expression = "";
            result.textContent = expression;
        }
        else {
            expression += e.target.textContent;
            result.textContent = expression;
        }


    });
});
