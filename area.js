const sides  = document.querySelectorAll(".input");
const areaBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

function calcProduct(a,b){
    const product = a * b;
    return product;
}


function calcArea(){
    const sidesProduct = calcProduct(Number(sides[0].value), Number(sides[1].value));
    
    const areaOfTriangle = (sidesProduct/2);
    output.innerText = ("Area of Triangle: " + areaOfTriangle);
}

areaBtn.addEventListener('click', calcArea)