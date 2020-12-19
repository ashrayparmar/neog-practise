var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector('#txt-input');
var outputDiv = document.querySelector("#output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function translationUrl(input) {
    return url + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error", error)
    alert("Something wrong with server")
}

function clickHandler() {

    var textInput = inputText.value;

    fetch(translationUrl(textInput))
        .then(response => response.json())
        .then(json => console.log(json.contents.translated))
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);

