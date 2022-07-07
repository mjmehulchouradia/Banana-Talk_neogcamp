console.log("How areyou doing ?");

var translateBtn = document.querySelector("#btn");

var txtInput=document.querySelector("#txt-input");
var divOutput=document.querySelector("#output");

// divOutput.innerText="Mehul Jain"

// console.log(divOutput);

function clickHandler() {
    console.log("Clicked");
    var txt=txtInput.value;
    divOutput.innerText=txt;
    console.log(divOutput);
}

translateBtn.addEventListener("click", clickHandler);
