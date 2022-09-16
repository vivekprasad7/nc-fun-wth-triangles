const sides  = document.querySelectorAll(".side-input");
const hypBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function calcSquare(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


function hypotenuse(){
    const squareOfSides = calcSquare(Number(sides[0].value), Number(sides[1].value));
    
    const lengthOfHypotenuse = Math.sqrt(squareOfSides);
    output.innerText = ("Hypotenuse: " + lengthOfHypotenuse);
}

hypBtn.addEventListener('click', hypotenuse)