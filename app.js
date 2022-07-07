console.log("How are you doing ?");

var translateBtn = document.querySelector("#btn");

var txtInput=document.querySelector("#txt-input");
var divOutput=document.querySelector("#output");

// divOutput.innerText="Mehul Jain"

// console.log(divOutput);
                
var serverURL="https://api.funtranslations.com/translate/minion.json";


function getTranslatedURL(text)
{
    return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("Something wrong with your server, Please try again later");
    alert("Timeout Error");
}


function clickHandler() {
     console.log("Clicked");
 fetch(getTranslatedURL(txtInput.value))
.then(response=>response.json())
.then(json=> divOutput.innerText=json.contents.translated)
.catch(errorHandler)

console.log(divOutput);
}

translateBtn.addEventListener("click", clickHandler);
