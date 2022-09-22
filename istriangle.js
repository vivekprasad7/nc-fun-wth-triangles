const angleInput = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#is-triangle-btn")
const msg = document.querySelector("#output")

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;

    return sumOfAngles;

}

function isTriangle(){
    if ( Number(angleInput[0].value) > 0 & Number(angleInput[1].value) > 0 & Number(angleInput[2].value) > 0){
    const sum = calculateSumOfAngles( Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value));

    if (sum === 180){
        msg.innerText = "It is a triangle."
    } else {
        msg.innerText = "It is not a triangle."

    }
} else {
    msg.innerText = "Please enter valid values of angles."

}

}


checkBtn.addEventListener('click', isTriangle);