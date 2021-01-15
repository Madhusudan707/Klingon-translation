let btnTranslate = document.querySelector("#btn-translate")
let txtInput = document.querySelector("#txt-input")
let outputDiv = document.querySelector("#output")
let serverURL = "https://api.funtranslations.com/translate/klingon.json"

function getTranslationURL(text){
    return serverURL+"?"+"text="+text
}
function errorHandler(error){
    console.log("error occurred: ",error)
    alert("server side issue")
}
function clickHandler() {
    let inputText = txtInput.value //take input

     fetch(getTranslationURL(inputText))
     .then(response=>response.json())
     .then(json=>{
         let translatedText=json.contents.translated
         outputDiv.innerText=translatedText
     })
     .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)