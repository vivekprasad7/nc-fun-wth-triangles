const sides  = document.querySelectorAll(".input");
const areaBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function calcProduct(a,b){
    const product = a * b;
    return product;
}


function calcArea(){
    if ( Number(sides[0].value) > 0 & Number(sides[1].value) > 0){
    const sidesProduct = calcProduct(Number(sides[0].value), Number(sides[1].value));
    
    const areaOfTriangle = (sidesProduct/2);
    output.innerText = ("Area of Triangle: " + areaOfTriangle);
    } else {
    output.innerText = ("Please enter valid sides.");

    }

}

areaBtn.addEventListener('click', calcArea)