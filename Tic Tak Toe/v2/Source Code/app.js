let boxs = document.querySelectorAll(".box");
let mark = "";
let resetbtn = document.querySelector(".reset")


boxs.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (element.innerHTML === "") {
            if (mark == "X") {
                mark = "O"
                setTimeout(() => {
                    chakwin("O")
                }, 200);
            }
            else {
                mark = "X"
                setTimeout(() => {
                    chakwin("X")
                }, 200);
            }
            element.innerHTML = mark;
        }
    })
});


function chakwin(mark) {
    if ((boxs[0].innerHTML == mark && boxs[1].innerHTML == mark && boxs[2].innerHTML == mark) ||
        (boxs[3].innerHTML == mark && boxs[4].innerHTML == mark && boxs[5].innerHTML == mark) ||
        (boxs[6].innerHTML == mark && boxs[7].innerHTML == mark && boxs[8].innerHTML == mark) ||

        (boxs[0].innerHTML == mark && boxs[3].innerHTML == mark && boxs[6].innerHTML == mark) ||
        (boxs[1].innerHTML == mark && boxs[4].innerHTML == mark && boxs[7].innerHTML == mark) ||
        (boxs[2].innerHTML == mark && boxs[5].innerHTML == mark && boxs[8].innerHTML == mark) ||

        (boxs[0].innerHTML == mark && boxs[4].innerHTML == mark && boxs[8].innerHTML == mark) ||
        (boxs[2].innerHTML == mark && boxs[4].innerHTML == mark && boxs[6].innerHTML == mark)) {
        alert(mark + "  is a winer");
        reset();
    }
}

function reset(){
    boxs.forEach((element, index) => {
        element.innerHTML="";
    })
}

resetbtn.onclick = ()=>{
    reset();
}