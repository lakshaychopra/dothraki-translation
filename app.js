var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#translator")

console.log(txtInput)

var url = "	https://api.funtranslations.com/translate/dothraki.json";

btnTranslate.addEventListener("click", clickHandler)

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}

function clickHandler(event) {
    var input = txtInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            output.value = json.contents.translated;
        })
        .catch(() => alert("Some error with the server, try again after some time"))
    
}
