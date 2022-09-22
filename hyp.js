const sides  = document.querySelectorAll(".side-input");
const hypBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function calcSquare(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}


function hypotenuse(){
    if ( Number(sides[0].value) > 0 & Number(sides[1].value) > 0 )
    {
        const squareOfSides = calcSquare(Number(sides[0].value), Number(sides[1].value));
    
        const lengthOfHypotenuse = Math.sqrt(squareOfSides);
        output.innerText = ("Hypotenuse: " + lengthOfHypotenuse);
    } else {
    output.innerText = ("Please enter valid sides.");
    } 
    
}

hypBtn.addEventListener('click', hypotenuse)