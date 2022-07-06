console.log("How areyou doing ?");

var translateBtn = document.querySelector("#btn");

var txtInput=document.querySelector("#txt-input");
var ip=txtInput.innerText("Jai Shree Ram");

function clickHandler() {
    console.log(ip);
}

translateBtn.addEventListener("click", clickHandler);
